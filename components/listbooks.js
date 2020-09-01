import React,{useState,useEffect} from 'react';
import {CircularProgress,Button,Paper} from '@material-ui/core';

export default function ListBooks(props) {

const [getproduct,setproducts]=useState([])

useEffect(()=>{
            setproducts(props.products);
})

const Listbook= getproduct.map((item)=>{
    return(
    <div className="col-md-3 px-4 shadow d-flex flex-column justify-content-center text-center">
    <div className="py-4 w-100 d-flex flex-column flex-center justify-content-center">
    <a href={item.url} target="_blank" className="d-flex flex-column justify-content-center center w-100">
    <img style={{ marginLeft:"12%" }} border="0" src={item.img} width="200" height="300" border="0" alt={item.text}/>
    </a>
    <h4>{item.text} <p style={{ color:"red" }}>{item.price+" $"}</p></h4>
   <Button style={{ backgroundColor:"rgb(245, 218, 99)", color:"white", fontWeight:'blod' }} >View in Amazon</Button>
    </div>
    </div>
    );
});

  return (
    <div style={{justifyContent:"space-between",width:"100%"}} className="row">
    {getproduct.length===0 ? <CircularProgress/>
     :  Listbook}
    </div>
  );
}
