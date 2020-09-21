import React,{useState,useEffect} from 'react';
import {ShoppingCart,Menu,Facebook,Twitter,Pinterest, Instagram, MessageRounded,Close, Search} from '@material-ui/icons';
import {SwipeableDrawer,Button, TextField,LinearProgress} from '@material-ui/core';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useDispatch,useSelector} from 'react-redux';
import logout from '../reducers/actions/logout';
import api from './db/Endpoin';
const Endpoint=api;

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
  const [themcolor,setthemcolor]=useState('');
  const [chatname,setchatname]=useState('');
  const [openchat,setopenchat]=useState(false);
  const [themlogo,setthemlogo]=useState('');
  const [themfont,setthemfont]=useState('');
  

//get logo
const getlogo=()=>{
  fetch(Endpoint+"api/user/logo")
  .then(res=>res.json())
  .then(data=>{
    console.log(Endpoint+data);
    if(data.message==="OK"){
      setthemlogo(data.data);
    }else{
     setthemlogo("/assets/icon/logo.png")
    }
  })
}

useEffect(()=>{
  getlogo();
},['']);

//change login and count cart
useEffect(()=>{
  setlogin(localStorage.getItem('sessionuser'));
  if(localStorage.getItem("cartlist")!==null){
  setcountproducts(JSON.parse(localStorage.getItem("cartlist")).length);
  }else{
    setcountproducts(0);
  }
  },[session,cart])
  

useEffect(()=>{
 try{
   if(localStorage.getItem('sessionuser')!=="true"){
  var top = document.getElementById('topbar');
  document.addEventListener('scroll',()=>{
    if(window.scrollY>5){
     top.classList.add('position-fixed')
     top.style.zIndex="99";
     document.getElementById('chat-bar').style.display="block";
    }else{
      top.classList.remove('position-fixed')
      top.style.zIndex="0"; 
      document.getElementById('chat-bar').style.display="none";
    }
  });
}
 }catch{}
});

//open close the chat bar
const chatbaropen=()=>{
 try{
  var first = document.getElementById('chatfirstlook');
  var second = document.getElementById('chatsecondlook');
  var chat =  document.getElementById('chat-bar');
   chat.classList.add('chat-bar2');
   chat.classList.remove('chat-bar');
   first.style.display="block";
    second.style.display="none";
   setopenchat(true);
 }catch{
alert("Error please try later")
 }
}
const chatbarclose=()=>{
 try{
  var first = document.getElementById('chatfirstlook');
  var second = document.getElementById('chatsecondlook');
  var chat =  document.getElementById('chat-bar');
  chat.classList.remove('chat-bar2');
   chat.classList.add('chat-bar');
   first.style.display="none";
    second.style.display="none";
   setopenchat(false);
 }catch{
alert("Error please try later")
 }
}

//chat bar start chat

const getusername=()=>{
var first = document.getElementById('chatfirstlook');
var second = document.getElementById('chatsecondlook');
if(chatname!=='')
{
  first.style.display="none";
  second.style.display="block";
}
}


//redirect to search page
const toserach=()=>{
router.push('/search/'+search);
}

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

//get them color ---------------
const getthemcolor=()=>{
  fetch(Endpoint+"api/user/them/color")
  .then(res=>res.json())
  .then(data=>{
    if(data.message==="OK"){
      setthemcolor(data.data)
    }else{
     console.log(data.data);
    }
  });
}
useEffect(()=>{
  getthemcolor();
},[themcolor])
//----------------

//-----------font 

//get them color ---------------
const getthemfont=()=>{
  fetch(Endpoint+"api/user/font")
  .then(res=>res.json())
  .then(data=>{
    if(data.message==="OK"){
      setthemfont(data.data)
    }else{
    setthemfont('normal')
    }
  });
}
useEffect(()=>{
  getthemfont();
},[themfont])

//change navbar
if(islogin==="true"){
//logged in 
return (
  <div style={{ width:"100%" }}>
  <nav style={{ backgroundColor: themcolor }} className="navbar navbar-expand-lg">
<Link  href="/">
<a className="navbar-brand">
<img src={Endpoint+themlogo} width="150" height="70" />
</a>
</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <Menu/>
</button>
<div style={{ marginLeft:"10vw",width:"100%" }} className="collapse navbar-collapse" id="navbarSupportedContent">
   <div className="form-inline my-2 my-lg-0 formsearch">
      <input onChange={(e)=>setsearch(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button onClick={()=>toserach()} className="btn bg-white my-2 my-sm-0" type="submit"><Search/></button>
    </div>
  <ul style={{ fontFamily:themfont }} className="navbar-nav mr-auto nav-list-first">
  <li className="nav-item">
   <Link href="#footer"><a className="nav-link text-white">contact</a></Link>
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
<nav  style={{ display:"flex",justifyContent:"space-between",backgroundColor:themcolor}} className="navbar navbar-expand text-white">
<div className="subnavlist">
<ul style={{ fontFamily:themfont }} className="navbar-nav ">
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
<ul style={{ fontFamily:themfont }} className="list-group">
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
width:33vw
}
.nav-list-first{
margin-left:10vw;
font-size:18px;
}
div {
}
nav {
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
    <div style={{ fontFamily:themfont }} id="chat-bar" className="chat-bar">
   {openchat==false ? 
    <div onClick={()=>chatbaropen()}  className="w-100 h-auto d-flex justify-content-between cursorpointrt">
    Chat with us <MessageRounded/>
    </div>
    :
    <div onClick={()=>chatbarclose()}  className="w-100 h-auto d-flex justify-content-between cursorpointrt">
    Close chat <Close/>
    </div>
  }
    <div className="w-100 h-100 p-1 bg-white d-flex flex-column justify-content-center align-items-center">
   <div className="w-100" id="chatfirstlook">
   <TextField style={{ marginLeft:"10%" }} onChange={(e)=>setchatname(e.target.value)} label="your name" variant="outlined" className="w-75" />
    <br/><br/>
    <Button style={{ marginLeft:"30%" }} onClick={()=>getusername()} color="default" variant='contained' >start chat</Button>
   </div>
   <div style={{ display:"none",color:"black" }} id="chatsecondlook">
   Welcome {chatname} , please wait ..<br/>
   <LinearProgress/>
   </div>
    </div>
    </div>
    <div style={{ fontFamily:themfont }} style={{ height:"auto" }} id="topbar" className="d-flex w-100 justify-content-between bg-dark py-1">
    <ul className="nav w-50">
    <li className="nav-item px-2"><Link href="/privacy-policy"><a className="text-white font-weight-normal">privacy policy</a></Link></li>
    <li className="nav-item px-2"><Link  href="/FAQ"><a className="text-white font-weight-normal">FAQ</a></Link></li>
    <li className="nav-item px-2"><Link  href="/account"><a className="text-white font-weight-normal">Login</a></Link></li>
    </ul>

    <ul className="nav">
    <li className="nav-item px-2"><a className="text-white" _blank href=""><Facebook/></a></li>
    <li className="nav-item px-2"><a className="text-white" _blank href=""><Pinterest/></a></li>
    <li className="nav-item px-2"><a className="text-white" _blank href=""><Twitter/></a></li>
    <li className="nav-item px-2"><a className="text-white" _blank href=""><Instagram/></a></li>
    </ul>
    
    </div>
    <nav style={{ backgroundColor:themcolor }} className="navbar navbar-expand-lg">
  <Link  href="/">
  <a className="navbar-brand">
  <img src={Endpoint+themlogo} width="120" height="60" />
  </a>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <Menu/>
  </button>
  <div style={{ marginLeft:"10vw",width:"100%" }} className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="form-inline my-2 my-lg-0 formsearch">
      <input onChange={(e)=>setsearch(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button onClick={()=>toserach()} className="btn bg-white my-2 my-sm-0" type="submit"><Search/></button>
    </div>
    <ul style={{ fontFamily:themfont }} className="navbar-nav mr-auto nav-list-first">
    <li className="nav-item">
     <a href="#footer" className="nav-link text-dark">contact</a>
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
<nav  style={{ display:"flex",justifyContent:"space-between",backgroundColor:themcolor}} className="navbar navbar-expand text-white">
<div className="subnavlist">
<ul style={{ fontFamily:themfont }} className="navbar-nav ">
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
<Link style={{ fontFamily:themfont }} href="/underteen"><a className="nav-link text-dark">under 10$</a></Link>
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
  width:33vw
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