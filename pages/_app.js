import React , {useEffect} from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import Navbarapp from '../components/navbar.js';
import Footer from '../components/footer';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import Panel from './admin/panel';


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

if(Component.name==="Panel"){
  return(
    <Panel/>
  )
}else{
  return (
    <div>
    <Head>
    <title>GetintoHome</title>
    </Head>
    <Navbarapp/>
    <Component {...pageProps} />
    <Footer/>
    </div>
    )
}
}

export default MyApp
