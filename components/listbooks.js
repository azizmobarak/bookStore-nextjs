import React,{useState,useEffect} from 'react';
import {CircularProgress,Button,Paper} from '@material-ui/core';
import addtocart from '../reducers/actions/addtocart';
import {useSelector,useDispatch} from "react-redux";

export default function ListBooks(props) {

const [getproduct,setproducts]=useState([])
const cart = useSelector(state=>state.Cart);
const apply = useDispatch();

useEffect(()=>{
  setproducts(props.products);
},[props.products])

useEffect(()=>{
console.log("Cart: "+localStorage.getItem("cartlist"));
console.log("cart state : "+cart);
},[cart])

const Listbook= getproduct.map((item)=>{
    return(
    <div style={{ minWidth:"140px" }} key={item._id} className="col-md-3 px-4 shadow d-flex flex-column flex-wrap justify-content-center text-center">
    <div className="py-4 w-100 d-flex flex-column flex-center justify-content-center">
    <a href={item.url} target="_blank" className="d-flex flex-column justify-content-center center w-100">
    <img className="imagebooksmobile" border="0" src={item.img} width="200" height="300" border="0" alt={item.text}/>
    </a>
    <div><p style={{ fontSiz:"0.5em" }}>{item.title}</p> <span style={{ color:"red" }}>{item.price+" $"}</span></div>
<Button onClick={()=>window.location.replace(item.url)} style={{ backgroundColor:"rgb(245, 218, 99)", color:"white", fontWeight:'blod' }} >View in Amazon</Button>
   <Button onClick={()=>apply(addtocart(item._id,item.title,item.description,item.url))} style={{ marginTop:"2px" }} color="" variant="outlined">Add to Cart</Button>
   </div>
    </div>
    );
});

  return (
    <div style={{justifyContent:"space-between",width:"100%"}} className="row">
    {props.loading ? <CircularProgress style={{marginLeft:"50%"}}/>
     :  Listbook}
    </div>
  );
}
