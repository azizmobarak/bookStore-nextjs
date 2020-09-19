import { Instagram, Pinterest, Twitter,Facebook } from '@material-ui/icons';
import React,{useState,useEffect} from 'react';
import ContactForm from './contactform';
import api from './db/Endpoin';
const Endpoint=api;

export default function Footer(props) {

  const [themcolor,setthemcolor]=useState('');
  
//get them color ---------------
const getthemcolor=()=>{
  fetch(Endpoint+"api/user/them/color",{
    method:"GET",
    credentials:"include",
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.message==="OK"){
    setthemcolor(data.data);
    }else{
     setthemcolor("rgb(245, 218, 99)")
    }
  })
  .catch(e=>setthemcolor("rgb(245, 218, 99)"));
}
useEffect(()=>{
  getthemcolor();
},[themcolor])
//----------------

  return (
    <section style={{ backgroundColor:themcolor,fontFamily:props.font }} id="footer" className="footer">
    <div className="row w-100 text-center py-2">
    <div className="col-sm-5 h-100 d-flex justify-content-center align-items-center flex-column text-left" >
    <ul className="nav">
    <li className="nav-item bg-transparent border-0">
    <ul className="list-group">
    <li className="list-group-item bg-transparent border-0"><a>about</a></li>
    <li className="list-group-item bg-transparent border-0"><a>FAQ</a></li>
    </ul>
    </li>
    <li className="nav-item bg-transparent border-0">
    <ul className="list-group">
    <li className="list-group-item bg-transparent border-0"><a>Store</a></li>
    <li className="list-group-item bg-transparent border-0"><a>Privacy</a></li>
    </ul>
    </li>
    <li className="nav-item bg-transparent border-0">
    <ul className="list-group">
    <li className="list-group-item bg-transparent border-0"><a>Books</a></li>
    <li className="list-group-item bg-transparent border-0"><a>Contact</a></li>
    </ul>
    </li>
    <li>
    <ul className="list-group">
    <li className="list-group-item bg-transparent border-0"><a>Who we are?</a></li>
    <li className="list-group-item bg-transparent border-0"><a>About Author</a></li>
    </ul>
    </li>
    </ul>
    <br/><br/>
    <div className="w-100 d-flex flex-column px-2 justify-content-center align-items-center">
    <h5>FOLLOW US :</h5>
    <div className="d-flex w-50 justify-content-between align-items-center">
    <Facebook/> <Twitter/> <Pinterest/> <Instagram/>
    </div>
    </div>
    </div>
    <div className="col-sm-2 d-flex justify-content-center align-items-center">
    <img src="/assets/icon/logo.png"/>
    </div>
    <div className="col-sm-5 d-flex justify-content-center" >
    <ContactForm/>
    </div>
    </div>
    <div className="row w-100">
    <div className="col-md-12 d-flex justify-content-center text-center">
    Created By <strong> Aziz Mobarak </strong>
    </div>
    </div>
    <style jsx>
        {`
        .footer{
            width:100%;
            height:auto;
            padding:10px;
        }
        .logofooter{
            border-radius:80%;
        }
        `}
        </style>
    </section>
    
  );
}
