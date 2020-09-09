import React from 'react';
import {TextField,Button} from '@material-ui/core';
import { useState } from 'react';

export default function Login() {

const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [error,seterror]=useState({display:false,text:""});

//send login auth
const Auth=(e)=>{
e.preventDefault();
fetch('http://localhost:2222/api/login',{
  method:"POST",
  credentials:"same-origin",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    email:email,
    password:password
  })
})
.then(res=>res.json())
.then(data=>{
  if(data.message=="error"){
    seterror({display:true,text:data.data})
  }else{
    seterror({display:false,text:data.data})
    //redirect user
  }
})
.catch(err=>seterror({display:true,text:"Oops! , something happen please try again"}));
}

  return (
   <form onSubmit={Auth} className="form-group w-50">
   {
     error.display==true ?
     <div className="form-row py-2 text-danger">
    <p>{error.text}</p>
    </div>
   :
   <div className="form-row text-success">
   <p>{error.text}</p>
   </div>
   }
   <div className="form-row py-2">
   <TextField onChange={(e)=>setemail(e.target.value)} id="email" className="w-100" label="email"  type="email" variant="outlined" />
   </div>
   <div className="form-row py-2">
   <TextField onChange={(e)=>setpassword(e.target.value)} id="password" className="w-100" label="password"  type="password" variant="outlined" />
   </div>
   <div className="form-row py-1">
   <Button type="submit" className="w-100" variant='contained' color="primary">Login</Button>
   </div>
   <div className="form-row">
   <Button className="w-100" color="secondary" variant="contained">Login with GOOGLE</Button>
   </div>
   </form>
  );
}
