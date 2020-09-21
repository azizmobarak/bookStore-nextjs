import React , {useEffect} from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import Navbarapp from '../components/navbar.js';
import Footer from '../components/footer';
import Adminlogin from './admin/login';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import Panel from './admin/panel';
import {Provider,useSelector} from 'react-redux';
import store from '../reducers/store';
import islogged from "../components/validatelogin";
import api from '../components/db/Endpoin';
const Endpoint=api;

function MyApp({ Component, pageProps }) {


 useEffect(()=>{
   //updateviews
 try{
  if(sessionStorage.getItem('viewdtoday')===null && Component.name !=="Panel")
   {
     fetch(Endpoint+"api/updateviews",{
       method:"PUT",
       credentials:"include"
     })
     .then(res=>res.json())
     .then(msg=>0);
     sessionStorage.setItem("viewdtoday","viewd")
   }
 }catch{
  fetch(Endpoint+"api/updateviews",{
       method:"PUT",
       credentials:"include"
     })
     .then(res=>res.json())
     .then(msg=>0);
 }
 },[""]);

useEffect(()=>{
islogged(Component.name,localStorage.getItem('sessionuser'))
})

if(Component.name==="Panel" || Component.name=="Adminlogin" ){
 if(Component.name==="Panel")
 {
  return(
    <Provider store={store}>
    <Panel/>
    </Provider>
   )
 }
 if(Component.name==="Adminlogin")
 {
  return <Provider store={store}>
   <Adminlogin/>
   </Provider>
 }
}else{
  return (
    <Provider store={store}>
    <Head>
    <script src="https://apis.google.com/js/api:client.js"></script>
    <title>GetintoHome</title>
    </Head>
    <Navbarapp/>
    <Component {...pageProps} />
    <Footer/>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </Provider>
    )
}
}

export default MyApp;
