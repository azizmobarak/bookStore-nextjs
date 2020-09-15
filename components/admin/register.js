import React,{useState} from 'react';
const Endpoint="http://localhost:2222/";

export default function AdminRegister() {

const [email ,setemail]=useState('');
const [password,setpassword]=useState('');
const [message,setmessage]=useState('');

//register admin
const addadmin=(e)=>{
e.preventDefault();

fetch(Endpoint+"api/admin/new",{
    method:"POST",
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
    console.log("data : "+data)
    if(data.message==="0K")
    {
        setmessage(data.data)
    }else{
        setmessage(data.data)
    }
})
}

  return (
      <div style={{ height:"400px" }}>
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
    <h2>Create website Admin</h2>
    <p className="text-dark">{message}</p>
    <form onSubmit={addadmin} id="add" className="form-group w-50" encType="multipart/form-data">
    <div className="form-row py-2">
    <input onChange={(e)=>setemail(e.target.value)} name="email" className="form-control" placeholder="email"  />
    </div>
    <div className="form-row py-2">
    <input onChange={(e)=>setpassword(e.target.value)} type="password" className="form-control" placeholder="password"  />
    </div>
    <div className="form-row py-3">
    <input name="password" className="btn btn-primary" type="submit" value="Create Admin for access to the dashbord"/>
    </div>
    </form>
    </div>
    </div>
    );
}
