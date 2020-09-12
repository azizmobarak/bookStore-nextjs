import React,{useState} from 'react';
import { TextField, Button, Checkbox,Modal, Fade } from '@material-ui/core';
import {Search} from '@material-ui/icons'; 
import {useRouter} from 'next/router';

export default function Filter(props) {

  const router = useRouter();

    const [open,setopen]=useState(false);
    const [search,setsearch]=useState('');

    const toserach=()=>{
    router.push('/search/'+search);
    }

const sortproducts=(val)=>{
if(val==="1"){
  props.products.sort();
}
if(val==="2"){
  props.products.sort();
}
}

 if(typeof(router.query.key)!=="undefined"){
     return <div className="py-2 text-dark h6 w-100 text-center">Result for " {router.query.key} "</div>
   } else{

  return (
    <div className="container d-flex py-1 justify-content-between align-items-center">
    <select onChange={(e)=>sortproducts(e.target.value)} className="dropdown h-75 justify-content-center">
    <option value="" className="dropdown-item">Select option</option>
    <option value="1" className="dropdown-item">Croissant</option>
    <option value="2" className="dropdown-item">Decroissant</option>
    </select>
    <div style={{ marginTop:'2%' }} className="filterbar">
    <div style={{ marginRight:"3px",fontWeight:"bold" }}><p>Journal <Checkbox onChange={(e,value)=>props.filter(e,value)} value="journal"/>|</p></div>
    <div style={{ marginRight:"3px",fontWeight:"bold" }}><p>Diary <Checkbox onChange={(e,value)=>props.filter(e,value)} value="diary"/>|</p></div>
    <div style={{ marginRight:"3px",fontWeight:"bold" }}><p>Notebook <Checkbox onChange={(e,value)=>props.filter(e,value)} value="notebook"/>|</p></div>
    <div style={{ marginRight:"3px",fontWeight:"bold" }}><p>planner <Checkbox onChange={(e,value)=>props.filter(e,value)} value="planner"/>|</p></div>
    <div style={{ marginRight:"3px",fontWeight:"bold" }}><p>other categories <Checkbox onChange={(e,value)=>props.filter(e,value)} value="other"/></p></div>
    </div>
   <div>
   <button onClick={()=>setopen(true)} className="btn btnsearch">
   <Search color="primary" />
   </button>
   <Modal
   open={open}
   onClose={()=>setopen(false)}
   aria-labelledby="simple-modal-title"
   aria-describedby="simple-modal-description"
   className="d-flex justify-content-center align-items-center"
   closeAfterTransition
   BackdropProps={{
     timeout: 500,
   }}
   >
   <div className="form-inline h-25 bg-dark p-4">
   <TextField onChange={(e)=>setsearch(e.target.value)} className="px-1 text-white" variant="outlined" label="Fast search"  />
   <Button onClick={()=>toserach()} variant="contained" color="primary" >Search</Button>
   </div>
   </Modal>
   </div>
    </div>
  );
   }
}
