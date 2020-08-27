import '../styles/globals.css';
import Navbarapp from '../components/navbar.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-alice-carousel/lib/alice-carousel.css';


function MyApp({ Component, pageProps }) {
  return (<div>
  <Navbarapp/>
  <Component {...pageProps} />
  </div>)
}

export default MyApp
