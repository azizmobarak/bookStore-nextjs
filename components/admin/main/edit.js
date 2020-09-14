import React from 'react';
import {TextField, Button,Checkbox} from "@material-ui/core";
import { Search, Delete,Edit } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
const Endpoint="http://localhost:2222/";

export default function EditProduct(props) {

const [list,setlist]=useState([]);
const [keysearch,setkeysearch]=useState("");
const [title,settitle]=useState('');
const [description,setdescription]=useState('');
const [price,setprice]=useState(0);
const [url,seturl]=useState('');
const [img,setimg]=useState('');
const [categorie,setcategorie]=useState('');
const [id,setid]=useState('');

const searchlist=async()=>{
await fetch(Endpoint+"api/admin/searchbookwithoutlimit/"+keysearch,{
  method:"get",
  credentials:"include"
})
.then(res=>res.json())
.then(data=>{
  console.log(data.data)
  if(data.message==="OK")
  {
    setlist(data.data); 
    var leng = data.data.length;
    props.alert({color:"success",variant:"filled",text:leng+" Items Found"})
  }else{
    props.alert({color:"error",variant:"filled",text:"error detected try again"})
  }
})
}

//fill form with click -------------------------------------------------
const fillupdateform=(id)=>{
   var found = list.find(item=>item._id===id);
          settitle(found.title);
          setdescription(found.description);
          setprice(found.price);
          seturl(found.url);
          setimg(found.img);
          setcategorie(found.categorie);
          setid(found._id);
}

// update book by ID --------------------------------

const bookupdate=(e)=>{
  e.preventDefault();
 fetch(Endpoint+"api/updatebook",{
    method:"PATCH",
    credentials:"include",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
        id: id,
        title: title,
        description :description ,
        price :  price,
        categorie :categorie ,
        url : url,
        img :img 
    })
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.message==="OK")
    {
      props.alert({color:"success",variant:"filled",text:data.data});
    }else{
      props.alert({color:"error",variant:"filled",text:data.data});
    }
  })
  .catch(e=> props.alert({color:"error",variant:"filled",text:"error"}))
}
//-------------------------------------------------------------------------------

//----delete book by id

const deletebook=async(id)=>{
await fetch(Endpoint+"api/deletebook",{
  method:"DELETE",
  credentials:"include",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    id : id
  })
})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  if(data.message==="OK")
  {
    searchlist();
    props.alert({color:"success",variant:"filled",text:data.data});
  }else{
    props.alert({color:"error",variant:"filled",text:data.data});
  }
})
//.catch(e=>props.alert({color:"error",variant:"filled",text:"Error"}))
}

//----------------------------


  return (
    <div className="w-100">
  <div className="row">
  <div className="col-sm-12 d-flex py-2 justify-content-center">
  <form className="bg-white d-flex p-2 rounded">
  <TextField
  onChange={(e)=>setkeysearch(e.target.value)}
  variant="standard"
  label="search"
  className="px-2"
  />

  <Button 
  onClick={()=>searchlist()} 
  variant="contained" color="primary" >
  <Search/>
  </Button>

  </form>
  </div>
  </div>
  <br/>
  <div className="row">
  <div className="col-sm-7">
  <ul className="list-group listsearch-edite-dashbord">
  {list.length>0 ?
    list.map(t=>{
        return (
        <li key={t._id} 
        className="list-group-item w-100 d-flex justify-content-between text-dark">
        <p className="w-75">{t.title} </p>
        <div className="d-flex w-25 h-50 justify-content-between">

        <Button
         onClick={()=>deletebook(t._id)} 
        variant="contained"
        color="secondary">
        <Delete/>
        </Button>

        <Button 
        onClick={()=>fillupdateform(t._id)} 
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
  <div className="col-sm-5 d-flex justify-content-center">
  <form onSubmit={bookupdate} className="form-group w-100">
  <div className="form-row py-2">
  <input onChange={(e)=>settitle(e.target.value)} value={title} className="form-control" placeholder="title" type="text" name="title" />
  </div>
  <div className="form-row py-2">
  <textarea onChange={(e)=>setdescription(e.target.value)} value={description}   className="form-control" rows="3" placeholder="description" type="text" name="description" ></textarea>
  </div>
  <div className="form-row py-2">
  <input onChange={(e)=>setcategorie(e.target.value)} value={categorie}  className="form-control" placeholder="Categorie" type="text" name="categorie" />
  </div>
  <div className="form-row py-2">
  <input onChange={(e)=>setprice(e.target.value)} value={price}  className="form-control" placeholder="Price" type="number" name="price" />
  </div>
  <div className="form-row py-2">
  <input onChange={(e)=>seturl(e.target.value)} value={url}  className="form-control" placeholder="Url" type="text" name="url" />
  </div>
  <div className="form-row py-2">
  <input onChange={(e)=>setimg(e.target.value)} value={img}  className="form-control" placeholder="Picture" type="text" name="picture" />
  </div>
  <div className="form-row py-2 justify-content-end">
  <Button
  type="submit"
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
