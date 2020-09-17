import React,{useEffect, useState} from 'react';
import AdminLogin from '../../components/admin/login';
import AdminRegister from '../../components/admin/register';
import {useRouter} from 'next/router';

import api from '../../components/db/Endpoin';
const Endpoint=api;

export default function Adminlogin() {

  const [countadmins,setcountadmins]=useState(0);
  const router = useRouter();

  const verifyloginadmin=()=>{
    try{
      return sessionStorage.getItem('adminlogin');
    }catch{
      return "false";
    }
  }

useEffect(()=>{
    setcountadmins(getnumberadmin());
})

if(verifyloginadmin()==="true"){
   return <p className="container py-4">
   click to go to Admin Panel you are already logged in ..
    <button className="btn btn-secondary px-3" onClick={()=>router.push('/admin/panel')} >Login</button>
      </p>
}else{
  return (
   countadmins == 0 ?
     <AdminRegister/>
        : 
     <AdminLogin/>
  );
}
}

const getnumberadmin=()=>{
   try{
    fetch(Endpoint+"api/admin/count")
    .then(res=>res.json())
    .then(data=>{
        if(data.message==="OK")
        {
            return data.data;
        }else{
            return 0;
        }
    })
   }catch{
     return 0;
   }
}
