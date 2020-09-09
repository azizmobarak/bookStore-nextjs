import React,{useState} from 'react';
import Login from '../components/login';
import Register from '../components/register';
import {Button, SwipeableDrawer} from '@material-ui/core';

export default function Accounts() {

const [openregister,setopenregister]=useState(false);

  return (
    <div className="divaccounts row">
    <div className="col-sm-5 colaccount1 d-flex flex-column justify-content-center align-items-center text-center">
     <h3>Login to your account</h3>
    <Login/>
    <Button onClick={()=>setopenregister(true)} color="default" variant="outlined">Create new account?</Button>
    <React.Fragment>
    <SwipeableDrawer id="drawer" anchor="left" open={openregister} onClose={()=>setopenregister(false)} >
    <div className="registeraccount d-flex flex-column justify-content-center align-items-center" >
     <Register/>
     <Button style={{ margin:"0 0 10px" }} onClick={()=>setopenregister(false)} color="default" variant="outlined">or Login?</Button>
    </div>
    </SwipeableDrawer>
    </React.Fragment>
    </div>
    <div className="col-sm-7 colaccount2">
    <h2 className="text-white h2">Create an account Now and Get latest books and diary,Journal, all promotions and news about new features and addons.</h2>
    </div>
    </div>
  );
}
