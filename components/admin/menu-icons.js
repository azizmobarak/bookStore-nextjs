import React from 'react';
import {Menu,Dashboard,Book,Edit,Message,Settings,Add,Block} from '@material-ui/icons';

export default function MenuIcons(props) {

  

 if(props.width==="100px")
 {
    return (
        <div style={{ width:props.width }} className="menu-left-dashbord text-white">
        <Dashboard onClick={()=>props.changemain("main")} fontSize="large" className="menu-left-dashbord-icons"/>
        <Add onClick={()=>props.changemain("add")} fontSize="large" className="menu-left-dashbord-icons"/>
        <Edit onClick={()=>props.changemain("edit")} fontSize="large" className="menu-left-dashbord-icons"/>
        <Message onClick={()=>props.changemain("messages")} fontSize="large" className="menu-left-dashbord-icons"/>
        <Settings onClick={()=>props.changemain("settings")} fontSize="large" className="menu-left-dashbord-icons"/>
        <Block onClick={()=>props.changemain("block")} fontSize="large" className="menu-left-dashbord-icons"/>
        </div>
      );
 }else{
    return (
        <div style={{ width:props.width }} className="menu-left-dashbord text-white">
        <div onClick={()=>props.changemain("main")} className="menu-left-dashbord-icons"><Dashboard fontSize="large" /> Main Dashbord</div>
        <div onClick={()=>props.changemain("add")} className="menu-left-dashbord-icons"><Add fontSize="large"/> Add New Books</div>
        <div onClick={()=>props.changemain("edit")} className="menu-left-dashbord-icons"><Edit fontSize="large"/> Edit or delete</div>
        <div onClick={()=>props.changemain("messages")} className="menu-left-dashbord-icons"><Message fontSize="large"/> send Messages</div>
        <div onClick={()=>props.changemain("settings")} className="menu-left-dashbord-icons"><Settings fontSize="large"/> Settings</div>
        <div onClick={()=>props.changemain("block")} className="menu-left-dashbord-icons"><Block fontSize="large"/> Block list</div>
        </div>
      );
 }
}
