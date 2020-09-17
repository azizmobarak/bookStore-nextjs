import React,{useState} from 'react';
import { useEffect } from 'react';
import Pagination from "@material-ui/lab/Pagination"
import { Checkbox, Button } from '@material-ui/core';
import {Refresh,Send} from '@material-ui/icons';
import sessionexpired from '../sessionexpired';
import { useRouter } from 'next/router';
import api from '../../db/Endpoin';
const Endpoint=api;

export default function Messages(props) {
  
  const router = useRouter();
const [list,setlist]=useState([]);
const [page,setpage]=useState(1)
const [count,setcount]=useState(0);

useEffect(()=>{
//change pages here
},[page])

const refrechusers=()=>{
fetch(Endpoint+"api/allusers/"+page,{
  method:"GET",
  credentials:"include"
})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  if(data.message==="OK")
  {
    setlist(data.data);
    setcount(data.pages);
    var len = data.data.length;
    props.alert({color:"success",variant:"filled",text: len +" Users Recived"})
  }else{
    if(data.message==="session")
    {
      sessionexpired(router);
    }
    props.alert({color:"error",variant:"filled",text:"error try again please!"})
  }
})
.catch(e=>props.alert({color:"error",variant:"filled",text:"error try again please!"}))

}

const listshow=()=>{
    return list.map(item=>(
    <li className="list-group-item text-dark" key={item._id}><Checkbox /> {item.email}</li>
    ));
}

//------------
const selectall=(e)=>{
 if( e.target.checked===true){
     document.querySelectorAll(".checklist").checked=true;
 }else{
  document.querySelectorAll(".checklist").checked=false;
}
}

//-----------------

  return (
    <div className="row">
    <div className="col-sm-7">
    <form className="form-group">
  <div className="form-row py-2">
  <input className="form-control" placeholder="Subject" name="subject" />
  </div>
  <div className="form-row py-2">
  <textarea rows="8" placeholder="message" className="form-control" name="message" />
  </div>
  <Button className="bg-success text-white" variant="contained" >Send <Send/></Button>
    </form>
    </div>
    <div className="col-sm-5">
    <Button 
    onClick={()=>refrechusers()} 
    variant="contained" 
    className="bg-white top-3">
    <Refresh/>
    </Button>
    <br/><br/>
    <ul className="list-group py-2 listsearch-users-dashbord">
    {list.length>0 ? 
    <li className="list-group-item text-info">
    <Checkbox onChange={(e)=>selectall(e)} /> Select ALL
    </li> 
    : null}
    {list.length>0
         ? listshow() 
         : <li className="list-group-item text-danger h5 py-2">
         No result yet try refrech users <Refresh/> 
         </li>}
    </ul>
    {list.length>0 ? 
    <div className="bg-white p-2 d-flex justify-content-center">
    <Pagination
     page={page}
     onChange={(e,value)=>setpage(value)}
     count={count} 
     color="primary" /> 
    </div>   
    :null}
    </div>
    </div>
  );
}
