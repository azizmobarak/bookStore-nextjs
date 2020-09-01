import Head from 'next/head';
import '../styles/globals.css';
import Navbarapp from '../components/navbar.js';
import Footer from '../components/footer';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-alice-carousel/lib/alice-carousel.css';


function MyApp({ Component, pageProps }) {
  return (<div>
  <Head>
  <title>GetintoHome</title>
  </Head>
  <Navbarapp/>
  <Component {...pageProps} />
  <Footer/>
  </div>)
}

export default MyApp
