import React,{ useState,useEffect } from 'react';
import {CircularProgress,Button,Paper} from '@material-ui/core';
import {Payment,Store,Shop} from '@material-ui/icons';
import Subscribe from './form-subscribe';


export default function Content() {

const [getproduct,setproducts]=useState([])

useEffect(()=>{
        const products =[
            {
                text:"Notebook",
                img:"https://images-na.ssl-images-amazon.com/images/I/41Vn3yzbxGL._SX331_BO1,204,203,200_.jpg",
                url:"https://www.amazon.com/dp/B08GMWQFXW"
            },
            {
                text:"Notebook",
                img:"https://images-na.ssl-images-amazon.com/images/I/41Vn3yzbxGL._SX331_BO1,204,203,200_.jpg",
                url:"https://www.amazon.com/dp/B08GMWQFXW"
            },
            {
                text:"Notebook",
                img:"https://images-na.ssl-images-amazon.com/images/I/41Vn3yzbxGL._SX331_BO1,204,203,200_.jpg",
                url:"https://www.amazon.com/dp/B08GMWQFXW"
            },
            {
                text:"Notebook",
                img:"https://images-na.ssl-images-amazon.com/images/I/41Vn3yzbxGL._SX331_BO1,204,203,200_.jpg",
                url:"https://www.amazon.com/dp/B08GMWQFXW"
            },
            {
                text:"Notebook",
                img:"https://images-na.ssl-images-amazon.com/images/I/41Vn3yzbxGL._SX331_BO1,204,203,200_.jpg",
                url:"https://www.amazon.com/dp/B08GMWQFXW"
            }
            ];
            setproducts(products);
})


  return (
    <div class="container-fluid justify-content-center">
   <div className="container py-4">
   <label className="labeltitle">Most selling Notebooks ,Journals , Diary</label>
   <div style={{justifyContent:"space-between",width:"100%"}} className="row">

   {getproduct.length===0 ? <CircularProgress/>
   :
     getproduct.map((item)=><div className="col-md-3 px-4 shadow d-flex flex-column justify-content-center text-center">
   <div className="py-4">
   <a href={item.url} target="_blank">
   <img border="0" src={item.img} width="200" height="300" border="0" alt=""  />
   </a>
   <h4>{item.text}</h4>
<Button style={{ backgroundColor:"rgb(245, 218, 99)", color:"white", fontWeight:'blod' }} >View in Amazon</Button>
   </div>
   </div>)}
   </div>
   </div>
    <br/>
    <div className="inforow">
    <div style={{ justifyContent:"space-between" }} className="container d-flex flex-row py-4">
    <Paper elevation={3} style={{ borderRadius:"10%" }}>
    <div style={{ placeItems:'center' }} className="d-flex flex-column justify-content-center text-center container">
    <Payment style={{ width:"60px", height:"60px",color:'rgb(245, 218, 99)' }} />
    Payment in Amazon 
    </div>
    </Paper>
    <Paper elevation={3} style={{ borderRadius:"10%",zIndex:3 }}>
   <div style={{ placeItems:'center' }} className="d-flex flex-column justify-content-center text-center container">
   <Store style={{ width:"60px", height:"60px",color:'rgb(245, 218, 99)' }}/>
   Verified Amazon seller
   </div>
    </Paper>
    <Paper elevation={3} style={{ borderRadius:"10%" }}>
    <div style={{ placeItems:'center' }} className="d-flex flex-column justify-content-center text-center container">
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
        background-color:rgb(245, 218, 99);
    }
    `}
    </style>
    </div>
  );
}
