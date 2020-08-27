import React from 'react';
import {ShoppingCart,Menu} from '@material-ui/icons';

const Navbarapp=()=> {
  return (
    <div style={{ width:"100%" }}>
    <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#">
  <img src="/assets/icon/logo.png" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <Menu/>
  </button>
  <div style={{ marginLeft:"10vw" }} className="collapse navbar-collapse" id="navbarSupportedContent">
    <form style={{ width:"40vw" }} className="form-inline my-2 my-lg-0">
      <input style={{ width:"30vw" }} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <ul style={{ marginLeft:"10vw" }} className="navbar-nav mr-auto">
    <li className="nav-item">
     <a className="nav-link text-white"  href="/">contact</a>
    </li>
    <li  className="nav-item">
    <a className="nav-link text-white" href="/">about</a>
    </li>
    <li className="nav-item">
     <a className="nav-link text-white" href="/">contact</a>
    </li>
  </ul>
  </div>
</nav>
<nav  style={{ display:"flex",justifyContent:"space-between"}} className="navbar navbar-expand text-white">
<ul className="navbar-nav">
<li className="nav-item px-4"><a className="nav-link text-white" href="/">under 10$</a></li>
<li className="nav-item px-4"><a className="nav-link text-white" href="/">Best quality</a></li>
<li className="nav-item px-4"><a className="nav-link text-white" href="/">Newest</a></li>
<li className="nav-item px-4"><a className="nav-link text-white" href="/">special design for you</a></li>
</ul>
<ShoppingCart className="carticon"/>
</nav>

<style jsx>
{`
div {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
nav {
  background-color:rgb(245, 218, 99);
  font-size:1.2em;
}
ul{
  font-size:1.4vw;
}
.carticon{

}
`}
</style>
    </div>
  );
}

export default Navbarapp;