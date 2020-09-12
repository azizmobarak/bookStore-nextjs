import React , {useEffect} from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import Navbarapp from '../components/navbar.js';
import Footer from '../components/footer';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import Panel from './admin/panel';

import {Provider,useSelector} from 'react-redux';
import store from '../reducers/store';
import islogged from "../components/validatelogin";

function MyApp({ Component, pageProps }) {


 useEffect(()=>{
   return ()=>{
   /* document.addEventListener("visibilitychange", event => {
      if (document.visibilityState == "visible") {
        console.log("tab is activate")
      } else {
        console.log("tab is inactive")
      }
    });*/
   }
 });

useEffect(()=>{
islogged(Component.name,localStorage.getItem('sessionuser'))
})

if(Component.name==="Panel"){
  return(
   <Provider store={store}>
   <Panel/>
   </Provider>
  )
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
    </Provider>
    )
}
}

export default MyApp;
