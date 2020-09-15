import React,{useState} from 'react';
import adminlogin from '../../reducers/actions/adminlogin';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';
const Endpoint="http://localhost:2222/";

export default function AdminLogin() {

    const [email ,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [message,setmessage]=useState('');
   const dispatch =useDispatch();
   const router = useRouter();
   const session = useSelector(state=>state.adminsession);

//login admin
const loginadmin=(e)=>{
    e.preventDefault();

    fetch(Endpoint+"api/admin",{
        method:"POST",
        credentials:"include",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email : email,
            password: password
        })
    })
    .then(res=>res.json())
    .then(data=>{
       
        if(data.message==="OK")
        {
            console.log("enter")  
           dispatch(adminlogin(true));
           console.log("session: "+session)
           router.push('/admin/panel')
        }else{
            setmessage(data.data);
        }
    })
    }


  return (
      <div style={{ height:"400px" }}>
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
    <h2>Admin Login</h2>
    <p className="text-white badge-success" >{message}</p>
    <form onSubmit={loginadmin} className="form-group w-50">
    <div className="form-row py-2">
    <input onChange={(e)=>setemail(e.target.value)} className="form-control" placeholder="email"  />
    </div>
    <div className="form-row py-2">
    <input onChange={(e)=>setpassword(e.target.value)} className="form-control" placeholder="password"  />
    </div>
    <div className="form-row py-3">
    <input className="btn btn-primary" type="submit" />
    </div>
    </form>
    </div>
    </div>
    );
}
