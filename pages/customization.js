import React,{useEffect, useState} from 'react';
import knova from 'konva';
import {Stage,Layer,Rect} from 'react-konva';


function genereteshape(){
  return({
  id:"square",
  x:20,
  y:30,
  isDragging:false
})};


export default function Test() {

  const [squars,setsquars]=useState([]);
  const [forms,setforms]=useState([]);
  const [circlewh,setcirclewh]=useState('50');
  const [traiglewh,settraiglewh]=useState('50');
  const [arrowwh,arsetrowwh]=useState('50');
  const [line,setline]=useState('50');
  const [star,setstar]=useState('50');
  const [square,setsquare]=useState(genereteshape());
  const [square2,setsquare2]=useState('50');
  const [count,setcount]=useState(0);

// Konva drag drop 
const handledrag=(e)=>{
  var id = e.target.id;
  setsquare(
    {
      id:"square",
      x:20,
      y:30,
      isDragging:e.target.id===id
    }
  )
}

const endDrag=(e)=>{
  var id = e.target.id;
  setsquare(
   genereteshape()
  );
}
///


useEffect(()=>{
  setforms(["circle"])
  var t=[];
 for(let i=1;i<9;i++){
t.push(i);
 }
 setsquars(t);
});

const graydiv=(i)=>(<div className="divsquare" onDrop={(e)=>drop(e)} onDragOver={(e)=>allowdrop(e)} key={i} style={{width:"25%",height:"50%",backgroundColor:"lightgray",color:"black",border:"0.5px black solid",backgroundImage:'url("/assets/icon/plus.svg")',backgroundSize:"50%",backgroundRepeat:"no-repeat",backgroundPosition:"center",opacity:".6" }}></div>);
const whitediv=(i)=>(<div className="divsquare" onDrop={(e)=>drop(e)} onDragOver={(e)=>allowdrop(e)} key={i} style={{width:"25%",height:"50%",color:"black",border:"0.5px black solid",backgroundImage:'url("/assets/icon/plus.svg")',backgroundSize:"50%",backgroundRepeat:"no-repeat",backgroundPosition:"center",opacity:".6"  }}></div>);


const allowdrop=(e)=>{
e.preventDefault();
}
const drag=(ev)=>{
  ev.dataTransfer.setData("obj", ev.target.id);
}
const drop=(ev)=> {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("obj");
  var nodeclone = document.getElementById(data).cloneNode(true);
  //nodeclone.id =data+count;
  //var i = count;
  //setcount(i++); 
  ev.target.appendChild(nodeclone);
}

const randvalue=(i)=>{
 var rand = i%6;
 return rand;
}

  return (
    <div style={{ width:"100%",height:'500px' }} className="row py-4">
    <div 
     id="dnd" 
     className="col-md-9 d-flex flex-wrap justify-content-start text-center bg-aqua"
     onDragOver={(e)=>allowdrop(e)}
     onDrop={(e)=>drop(e)} 
     >
    <Stage
    width="800" height="400"
    onDragOver={(e)=>allowdrop(e)}
    onDrop={(e)=>drop(e)}
    >
    <Layer
    
    onDragOver={(e)=>allowdrop(e)}
    onDrop={(e)=>drop(e)}
    >
    <Rect
    id="square"
    width="100"
    height="100"
    fill="red"
    draggable
    onDragStart={handledrag}
    onDragEnd={endDrag}
    />
    </Layer>
    </Stage>
    {/*squars.map(i=>(
    i%2==0 ? whitediv(i) : graydiv(i)
    ))
    */}
   </div>
     <div className="col-md-3">
     <div className="row">
     <div className="col-md-6">
    <img id="squareleft" draggable={true} onDragStart={(e)=>drag(e)} src="/assets/icon/square.svg" style={{ width:"30px",height:"30px" }}/>
     </div>
     <div className="col-md-6">
     
     </div>
     </div>
     <br/>
     <div className="row">
     <div className="col-md-6">
     
     </div>
     <div className="col-md-6">
     
     </div>
     </div>
     <br/>
     <div className="row">
     <div className="col-md-6">
     
     </div>
     <div className="col-md-6">
     
     </div>
     </div>
     <br/>
     <div className="row">
     <div className="col-md-6" style={{ fontWeight:"bold",fontSize:"23px" }}>
  
     </div>
     <div className="col-md-6">

     </div>
     </div>
     <br/>
     <div className="row">
     <div className="col-md-6">
     
     </div>
     <div className="col-md-6">
     
     </div>
     <div className="col-md-12">
     
     </div>
    </div>
    </div>
    <style jsx>
    {`
   
    `}
    </style>
    </div>
  );
}
