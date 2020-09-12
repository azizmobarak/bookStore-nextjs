import React,{ useState,useEffect } from 'react';
import {CircularProgress,Button,Paper} from '@material-ui/core';
import {Payment,Store,Shop} from '@material-ui/icons';
import Subscribe from './form-subscribe';
import ListBooks from './listbooks';
const Endpoint = "http://localhost:2222";

export default function Content() {

const [products,setproducts]=useState([]);

const getproducts =async()=>{
  await fetch(Endpoint+'/api/allbooks/'+1,{
    method:"get",
    credentials:'same-origin'
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.message=="OK"){
      setproducts(data.data);
    settotalpages(data.pages)
    }
  })
  .catch(err=>console.log("err:"+err));
}

  useEffect(()=>{
   getproducts();
  },[])


  return (
    <div className="container-fluid justify-content-center">
   <div className="container py-4">
   <label className="labeltitle">Most selling Notebooks ,Journals , Diary</label>
   <ListBooks products={products}/>
   </div>
    <br/>
    <div className="inforow">
    <div style={{ justifyContent:"space-between" }} className="container d-flex flex-row py-4">
    <Paper elevation={3} style={{ borderRadius:"10%" }}>
    <div style={{ placeItems:'center' }} className="d-flex flex-column justify-content-center text-center container divcontainicon">
    <Payment style={{ width:"60px", height:"60px",color:'rgb(245, 218, 99)' }} />
    Payment in Amazon 
    </div>
    </Paper>
    <Paper elevation={3} style={{ borderRadius:"10%",zIndex:3 }}>
   <div style={{ placeItems:'center' }} className="d-flex flex-column justify-content-center text-center container divcontainicon">
   <Store style={{ width:"60px", height:"60px",color:'rgb(245, 218, 99)' }}/>
   Verified Amazon seller
   </div>
    </Paper>
    <Paper elevation={3} style={{ borderRadius:"10%" }}>
    <div style={{ placeItems:'center' }} className="d-flex flex-column justify-content-center text-center container divcontainicon">
    <Shop style={{ width:"60px", height:"60px",color:'rgb(245, 218, 99)' }}/>
    Easy shopping
    </div>
    </Paper>
       </div>
    </div>
    <br/>
    <Subscribe/>
    <style jsx>
    {`
    .labeltitle{
        font-size : 1.6vw;
        font-weight:blod;
        margin:10px 2px 10px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .papercontainer{
        padding:10px;
    }
    .inforow{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-bottom:20px;
    }
    .divcontainicon{
      width:20vw;
      font-weight:bold;
    }
    @media only screen and (max-width:600px){
      .divcontainicon{
        width:30vw;
      }
    }
    `}
    </style>
    </div>
  );
}
