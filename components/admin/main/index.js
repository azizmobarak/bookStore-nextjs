import React from 'react';
import { useEffect } from 'react';
import chartjs from 'chart.js';
import { useState } from 'react';
import api from '../../db/Endpoin';
const Endpoint=api;


export default function Main(props) {

var Bookchart;
var ViewsChart;

const [all,setall] = useState(0);
const [journal,setjournal] = useState(0);
const [other,setother] = useState(0);
const [views,setviews] = useState(0);


useEffect(()=>{
fetch(Endpoint+"api/admin/bookscount",{
    method:"get",
    credentials:"include"
})
.then(res=>res.json())
.then(msg=>{
    if(msg.message==="OK")
    {
     setall(msg.data.all);
     setjournal(msg.data.journal);
     setother(msg.data.other)
    }
});

fetch(Endpoint+"api/countviews")
.then(res=>res.json())
.then(msg=>{
    if(msg.message==="OK")
    {
     setviews(msg.data);
    }
})

},[''])

useEffect(()=>{
   //start Book chart 
    var ctx = document.getElementById('bookChart');
    var ctx = document.getElementById('bookChart').getContext('2d');
    Bookchart = new chartjs(ctx,{
        type:"bar",
        data:{
            labels:['total books',"diary/journal","other categories"],
            datasets:[{
                label:"Books",
                data: [all,journal,other],
                backgroundColor:[
                    'red',
                    'blue',
                    'yellow'
                ],
                borderColor:[
                    'white','white','white'
                ],
                borderWidth:1
            }]
        },
        options:{
            legend: { display: false },
          title: {
           display: true,
           text: 'chart about some products categories'
           },
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
                }]
            }
        }

    });
});

useEffect(()=>{
   //start Book chart 
    var ctx = document.getElementById('ViewsChart');
    var ctx = document.getElementById('ViewsChart').getContext('2d');
    ViewsChart = new chartjs(ctx,{
        type:"line",
        data:{
            labels:"views chart",
            datasets:[{
                label:"Views per day",
                data: [0,views-(views/2),views-((views*40)/100),views-((views*10)/100),views],
                backgroundColor:[
                    'white',
                ],
                borderColor:[
                    'white'
                ],
                borderWidth:1
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
                }]
            }
        }

    });
});

  return (
    <div className="row text-white py-2">
    <div style={{ borderRight:"0.5px solid white" }} className="col-sm-6">
    <canvas className="text-white" id="bookChart" width="200" height="150">
    {Bookchart}
    </canvas>
    </div>
    <div className="col-sm-6">
    <canvas className="text-white" id="ViewsChart" width="200" height="150">
    {ViewsChart}
    </canvas>
    </div>
    </div>
  );
}
