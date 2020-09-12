import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getcart from '../reducers/actions/getcart';
import {Delete} from '@material-ui/icons';
import removefromcart from "../reducers/actions/removefromcart";

export default function Profile() {

  const cart = useSelector(state=>state.Cart);
  const apply = useDispatch();

useEffect(()=>{
  apply(getcart());
  console.log(cart)
},[""]);

const cartdata=()=>cart.map(item=>(
  <tr>
  <td>
  {item.title}
  </td>
  <td>
  {item.description}
  </td>
  <td>
 <a href={item.url}><Button style={{ height:"40px",fontSize:"0.7em", backgroundColor:"rgb(245, 218, 99)" }} color="default" variant="contained" >View in Amazon</Button></a>
  </td>
  </tr>
));

  return (
    <div className="py-2 container-fluid">
   <nav className="navbar">
   <h3>Products selected</h3>
   <h4>{cart.length}</h4>
   </nav>
   <br/>
   <table className="table bg-dark text-white">
   <thead style={{ fontFamily:"revert",fontWeight:"bold" }}>
   <tr>
   <td>
   Products title
   </td>
   <td>
   products descreption
   </td>
   <td>
   <Button onClick={()=>apply(removefromcart())} color="default" variant="contained"><Delete/></Button>
   </td>
   </tr>
   </thead>
   <tbody style={{ fontFamily:"serif" }}>
   {cartdata()}
   </tbody>
   </table>
    </div>
  );
}
