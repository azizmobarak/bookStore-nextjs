import React, { useEffect } from 'react';
import Dashbord from '../../components/admin';
import adminlogin from "../../reducers/actions/adminlogin";
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';



export default function Panel() {

const router = useRouter();
const adminsession = useSelector(state=>state.adminsession);


const verifyloginadmin=()=>{
  try{
    return sessionStorage.getItem('adminlogin');
  }catch{
    return "false";
  }
}

useEffect(()=>{
 console.log("session admin : "+sessionStorage.getItem('adminlogin'));
})

if(verifyloginadmin()==="true"){
  return (
    <div style={{backgroundColor:"black",height:"100%"}} className="w-100">
    <Dashbord/>
    </div>
  );}
  else{
  return <p className="container py-4">
   you are not allowed to access this page please login first ..
    <button className="btn btn-secondary px-3" onClick={()=>router.push('/admin/login')} >Login</button>
      </p>
  }
}
