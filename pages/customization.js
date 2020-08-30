import React,{useEffect, useState} from 'react';



export default function Test() {


  const [squars,setsquars]=useState([]);
  const [circlewh,setcirclewh]=useState('50');
  const [traiglewh,settraiglewh]=useState('50');
  const [arrowwh,arsetrowwh]=useState('50');
  const [line,setline]=useState('50');
  const [star,setstar]=useState('50');
  const [square,setsquare]=useState('50');
  const [square2,setsquare2]=useState('50');

useEffect(()=>{
  var t=[];
 for(let i=0;i<448;i++){
t.push(i);
 }
 setsquars(t);
});

const graydiv=(i)=>(<div key={i} style={{ width:"30px",height:"30px",backgroundColor:"lightgray",color:"black",borderBottom:"0.5px black solid" }}></div>);
const whitediv=(i)=>(<div key={i} style={{ width:"30px",height:"30px",backgroundColor:"white",color:"black",borderBottom:"0.5px black solid" }}></div>);
const circlediv=(i,color)=>(<div key={i} style={{ width:"20px",height:"20px",backgroundColor:color,border:"0.5px gray solid",borderRadius:"80%" }}></div>);

const allowdrop=(e)=>{
e.preventDefault();
}
const drag=(ev)=>{
  ev.dataTransfer.setData("text", ev.target.id);
}
const drop=(ev)=> {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

  return (
    <div style={{ width:"100%",height:'500px' }} className="row py-4">
    <div onDrop={(e)=>drop(e)} onDragOver={(e)=>allowdrop(e)}  id="dnd" className="col-md-9 d-flex flex-wrap justify-content-start text-center">
    {/*squars.map(i=>(
      i%2==0 ? whitediv(i) : graydiv(i)
    ))
    */}
   </div>
     <div className="col-md-3">
     <div className="row">
     <div  className="col-md-4">
    <img id="circle" draggable onDragStart={(e)=>drag(e)} className="dragelem" width={circlewh} src="/assets/icon/circle.svg" />
     </div>
     <div className="col-md-4">
     <img width={traiglewh} src="/assets/icon/triangle.svg" />
     </div>
     <div className="col-md-4">
     <img width={arrowwh} src="/assets/icon/arrow.svg" />
     </div>
     </div>
     <br/>
     <div className="row">
     <div  className="col-md-4">
    <img width={line} src="/assets/icon/line.svg" />
     </div>
     <div className="col-md-4">
     <img width={star} src="/assets/icon/start.svg" />
     </div>
     <div className="col-md-4">
     <img width={square} src="/assets/icon/square.svg" />
     </div>
     </div>
     <br/>
     <div className="row">
     <div className="col-sm-5">
     <img width={square2} src="/assets/icon/square2.svg" />
     </div>
     </div>
     <br/>
     <div className="row">
     <div className="col-md-4" style={{ fontWeight:"bold",fontSize:"23px" }}>
     <button className="btn">
     <img width="30" src="/assets/icon/text.svg" />
     </button>
     </div>
     <div className="col-md-8">
     <input style={{ width:"100%" }} className="form-control" placeholder='' />
     </div>
     </div>
     <br/>
     <div className="row">
     <div className="col-md-12">
     <label>Colors :  </label>
     <input style={{ width:"60%" }} type="color" aria-label="Colors" placeholder="select color" />
     </div>
     </div>
    </div>
    </div>
  );
}
