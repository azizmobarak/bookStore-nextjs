import React,{useState} from 'react';
import {Drawer,Button,TextField} from '@material-ui/core';
import {Menu,Dashboard,Book,Filter} from '@material-ui/icons';
import MenuItems from './menu';
import Alert from '@material-ui/lab/Alert';
import MenuIcons from './menu-icons';

export default function Dashbord() {

const [draweropen,setdraweropen]=useState(false);

  return (
    <div className="row main-dashbord">
    <div className="col-sm-1 py-2 bg-dark leftcolm">
    <Button 
    className="px-1 text-white"
    onClick={()=>setdraweropen(true)}
    color="default" variant="outlined">
     <Menu/>
     </Button>
    <MenuIcons width={"100px"}/>
    <Drawer
    className="bg-dark"
    open={draweropen}
    id="drawer"
    anchor="left"
    onClose={()=>setdraweropen(false)}
    >
    <MenuItems method={()=>setdraweropen(false)}/>
    </Drawer>
    </div>
    <div className="col-sm-11 py-2">
    <Alert
    className="py-2 text-white" 
    variant="outlined" 
    color="info">
    test this alert
    </Alert>
    <div className="row py-2">
    
    </div>
    </div>
    </div>
  );
}
