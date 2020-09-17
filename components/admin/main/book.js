import React,{useState} from 'react';
import {TextField,Button,Select,InputLabel,MenuItem,FormControl} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import sessionexpired from '../sessionexpired';
import { useRouter } from 'next/router';
import api from '../../db/Endpoin';
const Endpoint=api;

export default function Book(props) {
     const router = useRouter();
    const [categorie,setcategorie]=useState('Journal');
    const [specificcategorie,setspecificcategorie]=useState('Journal');
    const [bookname,setbookname]=useState('');
    const [description,setdescription]=useState('');
    const [price,setprice]=useState(0);
    const [url,seturl]=useState('');
    const [img,setimg]=useState('');
    const [message,setmessage]=useState({open:false,text:""});

    const handleChange=(e)=>{
        setcategorie(e.target.value);
    }

const SubmitBook=async(e)=>{
e.preventDefault();
await fetch(Endpoint+"api/newbooks",{
  method:"post",
  credentials:"include",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    title:bookname,
    description:description,
    price : parseInt(price),
    img:img,
    url:url,
    categorie:categorie==="other" ? specificcategorie : categorie
  })
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  if(data.message==="OK")
  {
   props.alert({color:"success",variant:"filled",text:data.data})
   setbookname("");setcategorie("");setimg('');setprice(0);seturl('');
  }else{
    if(data.message==="session")
    {
      sessionexpired(router);
    }
    props.alert({color:"error",variant:"filled",text:data.data})
  }
})
}

  return (
    <div className="d-flex justify-content-center align-items-center w-100">
   <form onSubmit={SubmitBook} className="d-flex flex-column w-50 h-100 justify-content-center p-3 bg-white rounded">
   <TextField 
   onChange={(e)=>setbookname(e.target.value)}
   required={true}
   color="secondary"
    name="name"
    className="py-2"
     variant="outlined" 
     label="Book Name" />
   <TextField 
   onChange={(e)=>setdescription(e.target.value)}
   multiline={true}
   rows={3}
   required={true}
   color="secondary"
   name="description" 
   className="py-2" 
   variant="outlined"
    label="Description" />
   <FormControl className="py-2">
        <InputLabel id="categorie-label">Categorie</InputLabel>
        <Select
          required={true}
          labelId="categorie-label"
          id="categories"
          value={categorie}
          onChange={handleChange}
          name="categorie1"
        >
          <MenuItem value="journal">Journal or Duary</MenuItem>
          <MenuItem value="book">Book</MenuItem>
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="clothes">Clothes</MenuItem>
          <MenuItem value="tools">Bag Tools</MenuItem>
          <MenuItem value="sport">Sport</MenuItem>
        </Select>
      </FormControl>
    {categorie==="other" ?
    <TextField
    onChange={(e)=>setspecificcategorie(e.target.value)}
   color="secondary"
    name="categorie2"
     className="py-2"
      variant="outlined" 
      label="specify Categorie" />
    :
    null
    }
    <TextField
    onChange={(e)=>setprice(e.target.value)}
    required={true}
   color="secondary"
    name="price"
     className="py-2"
      variant="outlined"
       label="Price" 
       type="number" />
    <TextField 
    onChange={(e)=>seturl(e.target.value)}
    required={true}
   color="secondary"
    name="url"
    className="py-2"
     variant="outlined" 
     label="Product URL"
      type="text" />
    <TextField 
    onChange={(e)=>setimg(e.target.value)}
    required={true}
   color="secondary"
    name="picture"
    className="py-2" 
    variant="outlined" 
    label="Image URL" 
    type="text" />
    <Button 
    type="submit"
    variant="contained" 
     color="primary">
     New Book <Add fontSize="default" />
     </Button>
   </form>
    </div>
  );
}
