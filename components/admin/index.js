import React,{useState} from 'react';
import {Drawer,Button,TextField} from '@material-ui/core';
import {Menu,Dashboard} from '@material-ui/icons';
import MenuItems from './menu';
import Alert from '@material-ui/lab/Alert';
import MenuIcons from './menu-icons';
import Main from './main';
import Book from './main/book';
import EditProduct from "./main/edit";
import Messages from "./main/messages";
import Settings from "./main/settings";

export default function Dashbord() {

const [draweropen,setdraweropen]=useState(false);
const [main,setmain]=useState("main");
const [alert,setalert]=useState({color:"info",variant:"outlined",text:"Welcome to Admin Panel"})

const switchmain=()=>{
  switch(main)
  {
    case "main" :
        return <Main alert={setalert}/>
    case "add":
      return <Book alert={setalert}/>
    case "edit":
      return <EditProduct alert={setalert}/>
    case "messages":
      return <Messages alert={setalert}/>
    case "settings":
      return <Settings alert={setalert}/>
    default:
      return <p className="text-white">error</p>
  }
}

  return (
    <div className="row main-dashbord">
    <div className="col-sm-1 text-center bg-dark leftcolm py-5">
    <Button 
    className="px-1 text-white"
    onClick={()=>setdraweropen(true)}
    color="default" variant="outlined">
     <Menu/>
     </Button>
    <MenuIcons width={"100px"} changemain={setmain}/>
    <Drawer
    open={draweropen}
    id="drawer"
    anchor="left"
    onClose={()=>setdraweropen(false)}
    >
    <MenuItems changemain={setmain} method={()=>setdraweropen(false)}/>
    </Drawer>
    </div>
    <div className="col-sm-11">
    <Alert
    className="py-3 text-white" 
    variant={alert.variant} 
    color={alert.color}>
    {alert.text}
    </Alert>
    <div className="py-1 text-white">
    {switchmain()}
    </div>
    </div>
    </div>
  );
}
