import React from 'react';
import {TextField, Button,Checkbox} from "@material-ui/core";
import { Search, Delete,Edit } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';

export default function EditProduct() {

const [list,setlist]=useState([]);

const searchlist=(e)=>{
    var tab = ["title1","title2","title3","title1","title2","title3","title1","title2","title3","title1","title2","title3"];
    setlist(tab); 
}

  return (
    <div className="w-100">
  <div className="row">
  <div className="col-sm-12 d-flex py-2 justify-content-center">
  <form className="bg-white d-flex p-2 rounded">
  <TextField
  variant="standard"
  label="search"
  className="px-2"
  />

  <Button 
  onClick={(e)=>searchlist(e)} 
  variant="contained" color="primary" >
  <Search/>
  </Button>

  </form>
  </div>
  </div>
  <br/>
  <div className="row">
  <div className="col-sm-6">
  <ul className="list-group listsearch-edite-dashbord">
  {list.length>0 ?
    list.map(t=>{
        return (
        <li key={t} 
        className="list-group-item d-flex justify-content-between text-dark">
        {t} 
        <div className="d-flex w-25 justify-content-between">

        <Button
         onClick={()=>alert(t)} 
        variant="contained"
        color="secondary">
        <Delete/>
        </Button>

        <Button 
        onClick={()=>alert(t)} 
        variant="contained"
        className="bg-dark text-white">
        <Edit/>
        </Button>

        </div>
        </li> 
         )})
    :
    <div className="card bg-white">
    <div
    className="card-title text-dark text-center h3 justify-content-center">
    No result <Search/>
    </div>
    </div>
    }
  </ul>
  </div>
  <div className="col-sm-6 d-flex justify-content-center">
  <form className="form-group w-75">
  <div className="form-row py-2">
  <input className="form-control" placeholder="title" type="text" name="title" />
  </div>
  <div className="form-row py-2">
  <textarea className="form-control" rows="3" placeholder="description" type="text" name="description" ></textarea>
  </div>
  <div className="form-row py-2">
  <input className="form-control" placeholder="Categorie" type="text" name="categorie" />
  </div>
  <div className="form-row py-2">
  <input className="form-control" placeholder="Price" type="number" name="price" />
  </div>
  <div className="form-row py-2">
  <input className="form-control" placeholder="Url" type="text" name="url" />
  </div>
  <div className="form-row py-2">
  <input className="form-control" placeholder="Picture" type="text" name="picture" />
  </div>
  <div className="form-row py-2 justify-content-end">
  <Button
  color="primary"
  variant="contained">
  Validate
  </Button>
  </div>
  </form>
  </div>
  </div>
  </div>
  );
}
