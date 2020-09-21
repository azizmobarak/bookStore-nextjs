import React, { useState,useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Alert from '@material-ui/lab/Alert';
import { LinearProgress } from '@material-ui/core';
import api from './db/Endpoin';
const Endpoint=api;

export default function Slider() {

const [slider,setslider]=useState([]);


//get them slider ---------------
const getslider=()=>{
  fetch(Endpoint+"api/user/slider",{
    method:"GET",
    credentials:"include",
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.message==="OK"){
    setslider(data.data);
    console.log("slider: "+Endpoint+slider.img1)
    }else{
     
    }
  });
}
useEffect(()=>{
 return (()=>getslider());
},[""])
//----------------


  return (
    <div className="container py-2">
    <Alert severity="warning">
    Note : choose a book and you will be redirected to our store on amazon
    </Alert>
    <br/>
{typeof slider!="undefined" || slider.length==0  ? 
  <AliceCarousel stopAutoPlayOnHover fadeOutAnimation buttonsDisabled dotsDisabled autoPlay autoPlayInterval={5000}>
  <img src={Endpoint+slider.img1} className="sliderimg"/>
  <img src={Endpoint+slider.img2} className="sliderimg"/>
  <img src={Endpoint+slider.img3} className="sliderimg"/>
</AliceCarousel>
:
<div>
please wait to load slider ..
<LinearProgress/>
</div>
}
<style jsx>
{`
div{
    hight:300px;
}
.sliderimg{
    width: 100%;
    height: 500px;
    object-fit: cover;
}

`}
</style>
    </div>
  );
}
