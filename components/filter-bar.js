import React,{useState} from 'react';
import { TextField, Button, Checkbox,Modal, Fade } from '@material-ui/core';
import {Search} from '@material-ui/icons'; 

export default function Filter(props) {

    const [open,setopen]=useState(false);



  return (
    <div className="container d-flex py-1 justify-content-between align-items-center">
    <select className="dropdown h-75 justify-content-center">
    <option value="cr" className="dropdown-item">Select option</option>
    <option value="cr" className="dropdown-item">Croissant</option>
    <option value="dec" className="dropdown-item">Decroissant</option>
    </select>
    <div style={{ marginTop:'2%' }} className="d-flex justify-content-between align-items-center">
    <div><p>Journal <Checkbox value={false}/></p></div>
    <div><p>Diary <Checkbox value={false}/></p></div>
    <div><p>Notebook <Checkbox value={false}/></p></div>
    <div><p>planner <Checkbox value={false}/></p></div>
    <div><p>other categories <Checkbox value={false}/></p></div>
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
   <form className="form-inline h-25 bg-dark p-4">
   <TextField className="px-1 text-white" variant="outlined" label="Fast search"  />
   <Button variant="contained" color="primary" >Search</Button>
   </form>
   </Modal>
   </div>
    </div>
  );
}
