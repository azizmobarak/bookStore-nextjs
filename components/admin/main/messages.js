import React,{useState} from 'react';
import { useEffect } from 'react';
import Pagination from "@material-ui/lab/Pagination"
import { Checkbox, Button } from '@material-ui/core';
import {Refresh,Send} from '@material-ui/icons';

export default function Messages() {

const [list,setlist]=useState([]);
const [page,setpage]=useState(1)

useEffect(()=>{
//change pages here
},[page])

const refrechusers=()=>{
var tab = ["email@email1","email@email2","email@email3","email@email4","email@email5"];
setlist(tab);
}

const listshow=()=>{
    return list.map(item=>(
    <li className="list-group-item text-dark" key={item}><Checkbox/> {item}</li>
    ));
}

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
    <Checkbox/> Select ALL
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
     count={10} 
     color="primary" /> 
    </div>   
    :null}
    </div>
    </div>
  );
}
