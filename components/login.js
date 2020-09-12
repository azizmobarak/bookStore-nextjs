import React from 'react';
import {TextField,Button} from '@material-ui/core';
import { useState } from 'react';
import {useRouter} from "next/router"
const Endpoint = "http://localhost:2222";

import login from "../reducers/actions/login";
import {useSelector,useDispatch} from "react-redux";


export default function Login() {

const router = useRouter();

const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [error,seterror]=useState({display:false,text:""});
const dispatch = useDispatch();

//send login auth
const Auth=(e)=>{
e.preventDefault();
fetch(Endpoint+'/api/login',{
  method:"POST",
  credentials:"include",
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
    seterror({display:false,text:"Welecome , you will be redirected to profile page"})
    //token stored in HttpOnly at cookies.
    //the following line is just to controle public and private pages.
    dispatch(login());
    localStorage.setItem("email",data.data);
    window.location.replace('/profile');
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
