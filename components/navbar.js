import React,{useState,useEffect} from 'react';
import {ShoppingCart,Menu} from '@material-ui/icons';
import {SwipeableDrawer,Button} from '@material-ui/core';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useDispatch,useSelector} from 'react-redux';
import logout from '../reducers/actions/logout';

const Endpoint = "http://localhost:2222";

const Navbarapp=()=> {
  
  const router = useRouter();
  const [search,setsearch]=useState('');
  const [islogin,setlogin]=useState("false");
  const [countproducts,setcountproducts]=useState(0);
  const dispatch = useDispatch();
  const session = useSelector(state=>state.session);
  const cart = useSelector(state=>state.Cart);
  const [menustatus1,setmenustatus1]=useState(false);
  const [menustatus2,setmenustatus2]=useState(false);


//redirect to search page
const toserach=()=>{
router.push('/search/'+search);
}

//change login and count cart
useEffect(()=>{
setlogin(localStorage.getItem('sessionuser'));
if(localStorage.getItem("cartlist")!==null){
setcountproducts(JSON.parse(localStorage.getItem("cartlist")).length);
}else{
  setcountproducts(0);
}
},[session,cart])

//change dropdown selection
const userselectoptions=async(e)=>{
if(e.target.value==="logout")
{
 dispatch(logout());
 window.location.replace('/account');
}
if(e.target.value==="profile")
{
 router.push('/profile')
}
}



//change navbar
if(islogin==="true"){
//logged in 
return (
  <div style={{ width:"100%" }}>
  <nav className="navbar navbar-expand-lg">
<Link  href="/">
<a className="navbar-brand">
<img src="/assets/icon/logo.png" />
</a>
</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <Menu/>
</button>
<div style={{ marginLeft:"10vw",width:"100%" }} className="collapse navbar-collapse" id="navbarSupportedContent">
  <div className=" w-50 form-inline my-2 my-lg-0 formsearch">
    <input onChange={(e)=>setsearch(e.target.value)} className="w-75 form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button onClick={()=>toserach()} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </div>
  <ul className="navbar-nav mr-auto nav-list-first">
  <li className="nav-item">
   <Link href="/contact"><a className="nav-link text-white">contact</a></Link>
  </li>
  <li  className="nav-item">
  <Link href="/about"><a className="nav-link text-white">about</a></Link>
  </li>
  <li className="nav-item justify-content-center align-items-center">
   <select onChange={(e)=>userselectoptions(e)} className="dropdown w-50 py-2 bg-transparent">
   <option value="profile" className=" dropdown-menu-item text-center font-smaller">{localStorage.getItem("email")}</option>
   <option value="logout" className="dropdown-menu-item text-center font-smaller">Logout</option>
   </select>
  </li>
</ul>
</div>
</nav>
<nav  style={{ display:"flex",justifyContent:"space-between"}} className="navbar navbar-expand text-white">
<div className="subnavlist">
<ul className="navbar-nav ">
<li className="nav-item px-4">
<Link href="/underteen"><a className="nav-link text-white">under 10$</a></Link>
</li>
<li className="nav-item px-4">
<Link href="/bestquality"><a className="nav-link text-white">Best quality</a></Link>
</li>
<li className="nav-item px-4">
<Link href="/newest"><a className="nav-link text-white">Newest</a></Link>
</li>
<li className="nav-item px-4">
<Link href="/customization"><a className="nav-link text-white">special design for you</a></Link>
</li>
</ul>
</div>

<div className="btnmenusecondbar">
<Button onClick={()=>setmenustatus1(true)} className="" color="default" variant="outlined">
<Menu/>
</Button>
</div>

<React.Fragment>
<SwipeableDrawer  id="drawernav1" anchor="left" open={menustatus1} onClose={()=>setmenustatus1(false)} >
<ul className="list-group">
<li className=" list-group-item px-4">
<Link href="/underteen"><a className="nav-link text-dark">under 10$</a></Link>
</li>
<li className="list-group-item px-4">
<Link href="/bestquality"><a className="nav-link text-dark">Best quality</a></Link>
</li>
<li className="list-group-item px-4">
<Link href="/newest"><a className="nav-link text-dark">Newest</a></Link>
</li>
<li className="list-group-item px-4">
<Link href="/customization"><a className="nav-link text-dark">special design for you</a></Link>
</li>
</ul>
</SwipeableDrawer>

</React.Fragment>

<Link href="/profile">
<div style={{ cursor:"pointer" }}>
<span className="badge">
<ShoppingCart className="carticon"/>
{countproducts}
</span>
</div>
</Link>
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
else{

  return (
    <div style={{ width:"100%" }}>
    <nav className="navbar navbar-expand-lg">
  <Link  href="/">
  <a className="navbar-brand">
  <img src="/assets/icon/logo.png" />
  </a>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <Menu/>
  </button>
  <div style={{ marginLeft:"10vw",width:"100%" }} className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="form-inline my-2 my-lg-0 formsearch">
      <input onChange={(e)=>setsearch(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button onClick={()=>toserach()} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
    <ul className="navbar-nav mr-auto nav-list-first">
    <li className="nav-item">
     <Link href="/contact"><a className="nav-link text-dark">contact</a></Link>
    </li>
    <li  className="nav-item">
    <Link href="/about"><a className="nav-link text-dark">about</a></Link>
    </li>
    <li className="nav-item">
     <Link  href="/account"><a className="nav-link text-dark">MyAccount</a></Link>
    </li>
  </ul>
  </div>
</nav>
<nav  style={{ display:"flex",justifyContent:"space-between"}} className="navbar navbar-expand text-white">
<div className="subnavlist">
<ul className="navbar-nav ">
<li className="nav-item px-4">
<Link href="/underteen"><a className="nav-link text-dark">under 10$</a></Link>
</li>
<li className="nav-item px-4">
<Link href="/bestquality"><a className="nav-link text-dark">Best quality</a></Link>
</li>
<li className="nav-item px-4">
<Link href="/newest"><a className="nav-link text-dark">Newest</a></Link>
</li>
</ul>
</div>

<div className="btnmenusecondbar">
<Button onClick={()=>setmenustatus2(true)} className="" color="default" variant="outlined">
<Menu/>
</Button>
</div>

<React.Fragment>

<SwipeableDrawer id="drawernav2" anchor="left" open={menustatus2} onClose={()=>setmenustatus2(false)} >
<ul className="list-group">
<li className="list-group-item px-4">
<Link href="/underteen"><a className="nav-link text-dark">under 10$</a></Link>
</li>
<li className="list-group-item px-4">
<Link href="/bestquality"><a className="nav-link text-dark">Best quality</a></Link>
</li>
<li className="list-group-item px-4">
<Link href="/newest"><a className="nav-link text-dark">Newest</a></Link>
</li>
</ul>
</SwipeableDrawer>

</React.Fragment>



<Link href="/account">
<div style={{ cursor:"pointer" }}>
<ShoppingCart className="carticon"/>
{countproducts}
</div>
</Link>
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
}


export default Navbarapp;