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
  <div style={{ marginLeft:"10vw",width:"100%" }} className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="form-inline my-2 my-lg-0 formsearch">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <ul className="navbar-nav mr-auto nav-list-first">
    <li className="nav-item">
     <a className="nav-link text-white"  href="/">contact</a>
    </li>
    <li  className="nav-item">
    <a className="nav-link text-white" href="/">about</a>
    </li>
    <li className="nav-item">
     <a className="nav-link text-white" href="/">MyAccount</a>
    </li>
  </ul>
  </div>
</nav>
<nav  style={{ display:"flex",justifyContent:"space-between"}} className="navbar navbar-expand text-white">
<ul className="navbar-nav second-list-nav">
<li className="nav-item px-4"><a className="nav-link text-white" href="/">under 10$</a></li>
<li className="nav-item px-4"><a className="nav-link text-white" href="/">Best quality</a></li>
<li className="nav-item px-4"><a className="nav-link text-white" href="/">Newest</a></li>
<li className="nav-item px-4"><a className="nav-link text-white" href="/customization">special design for you</a></li>
</ul>
<ShoppingCart className="carticon"/>
</nav>
<style jsx>
{`
.formsearch>input{
  width:30vw
}
.nav-list-first{
  margin-left:10vw;
  font-size:18px;
}
div {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
nav {
  background-color:rgb(245, 218, 99);
  font-size:1.2em;
}
.second-list-nav{
  font-size:1.4vw;
}

@media only screen and (max-width:500px){
  .formsearch>input{
    width:60vw
  }
  .second-list-nav{
    font-size:11px;
  }
  .second-list-nav>li{
    width:auto;
  }
  .nav-list-first{
    margin-left:1px;
    font-size:18px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
}
`}
</style>
    </div>
  );
}

export default Navbarapp;