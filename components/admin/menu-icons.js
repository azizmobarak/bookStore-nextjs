import React from 'react';
import {Menu,Dashboard,Book,Filter} from '@material-ui/icons';

export default function MenuIcons(props) {
 if(props.width==="100px")
 {
    return (
        <div style={{ width:props.width }} className="menu-left-dashbord text-white">
        <Dashboard fontSize="large" className="menu-left-dashbord-icons"/>
        <Book fontSize="large" className="menu-left-dashbord-icons"/>
        <Filter fontSize="large" className="menu-left-dashbord-icons"/>
        </div>
      );
 }else{
    return (
        <div style={{ width:props.width }} className="menu-left-dashbord text-white">
        <div className="menu-left-dashbord-icons"><Dashboard fontSize="large" /> Main Dashbord</div>
        <div className="menu-left-dashbord-icons"><Book fontSize="large"/> Add New Books</div>
        <div className="menu-left-dashbord-icons"><Filter fontSize="large"/> filter or delete</div>
        </div>
      );
 }
}
