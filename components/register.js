import React,{useState} from 'react';
import {TextField,Button,Checkbox,CircularProgress} from '@material-ui/core';
const Endpoint = "http://localhost:2222";
import googleAuth from './googleAuth';


export default function Register() {

//input values
const [username,setusername]=useState('');
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [error,seterror]=useState({type:"",error:"",value:false});
const [generalerror,setgeneralerror]=useState({type:"",error:""});
const [ischecked,setchecked]=useState(false);
const [isbtnloading,setbtnloading]=useState(false);

//confirmed email
const confirmemail =(e)=>{
if(e.target.value!==email){
  seterror({type:"email",error:"Email not the same , please check it",value:true});
}else{
  seterror({type:"email",error:"",value:false});
}
}
//confirm password
const confirmpassword=(e)=>{
if(e.target.value!==password){
  seterror({type:"password",error:"Password not matches , please make sure it's the same",value:true});
}else{
  seterror({type:"password",error:"",value:false});
}
setgeneralerror({type:"error",error:""})
}

//confirm username
const confirmusername=(e)=>{
  setusername(e.target.value)
if(username.length<4){
  seterror({type:"username",error:"username length must be more than four chars",value:true})
}else{
  seterror({type:"username",error:"",value:false})
}
setgeneralerror({type:"error",error:""})
}


//register user
const registeruser =async(e)=>{
  e.preventDefault();
  setbtnloading(true);
  console.log("clicked")

  if(error.value==false && ischecked==true && (username!=='' && email!=='' && password!=='')){

    await fetch(Endpoint+"/api/register",{
      method:"POST",
      credentials:"same-origin",
      headers:{
        "Content-Type":"application/json",
      },
      body :JSON.stringify({
        username : username,
        email:email,
        password:password
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data.message)
      if(data.message=="OK")
      {
        setgeneralerror({type:"OK",error:data.data});
      }else{
        setgeneralerror({type:"error",error:data.data});
      }
      setbtnloading(false)
    })
   .catch(err=>console.log(err));
  }else{
    if(ischecked==false)
    {
      setgeneralerror({type:"error",error:"Please Check the checkbox brfore register"})
    }else{
      setgeneralerror({type:"error",error:"Please enter a valid "+error.type})
    }
    setbtnloading(false);
  // alert("chechked : "+ischecked+"\n error: "+error.value+"\n username "+username+"\n email "+email+"\n password "+password)
  }
}

  return (
    <form style={{ marginTop:"40%" }} onSubmit={registeruser} id="form_register" className="form-group w-75">
    <div className="form-row py-2">
    <TextField error={error.type=="username" ? error.value : false} helperText={error.type=="username" ? error.error : ""} onChange={(e)=>confirmusername(e)} name="username" className="w-100" label="UserName" type="text" variant="outlined" />
    </div>
    <div className="form-row py-2">
    <TextField error={error.type=="email" ? error.value : false} onChange={(e)=>{setemail(e.target.value);confirmemail(e)}}  className="w-100" label="Email" type="email" variant="outlined" />
    </div>
    <div className="form-row py-2">
    <TextField error={error.type=="email" ? error.value : false} onChange={(e)=>confirmemail(e)} helperText={error.type=="email" ? error.error : ""} name="email" className="w-100" label="Confirm email" type="email" variant="outlined" />
    </div>
    <div className="form-row py-2">
    <TextField error={error.type=="password" ? error.value : false} onChange={(e)=>{setpassword(e.target.value),confirmpassword(e)}} className="w-100" label="Password" type="password" variant="outlined" />
    </div>
    <div className="form-row py-2">
    <TextField error={error.type=="password" ? error.value : false} onChange={(e)=>confirmpassword(e)} helperText={error.type=="password" ? error.error : ""} name="password" className="w-100" label="Confirm password" type="password" variant="outlined" />
    </div>
    <div className="form-row py-2">
     <p className="px-2">
     <Checkbox onChange={(e)=>setchecked(e.target.checked)} />
      I have read and I accept all terms and privacy policy
      <p style={{ color:"red",fontSize:"10px" }}>(*you must check it to register)</p>
      </p>
    </div>
    <div className="form-row py-1">
    </div>
    <div className="form-row w-100">
   {generalerror.type=="OK" ? <p className="text-success">{generalerror.error}</p>
   :
   <p className="text-danger w-100" style={{fontWeight:"bold",fontFamily:"revert",fontSize:"0.9em" }} >{generalerror.error}</p>
  }
   </div>
    <div className="form-row py-1">
    {
      isbtnloading ? 
      <Button  type="submit" className="w-100" variant='contained' color="primary"><CircularProgress color="" /> </Button>

      :
      <Button  type="submit" className="w-100" variant='contained' color="primary">Create Account </Button>
    }
    </div>
    <div className="form-row">
   <Button id="btngoogle" onClick={(e)=>googleAuth(e)} className="w-100" color="secondary" variant="contained">Register with GOOGLE</Button>
   </div>
  
    </form>
  );
}
