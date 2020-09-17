import React from 'react';
import {MessageOutlined} from '@material-ui/icons';
import {TextField,Button} from '@material-ui/core';
import api from './db/Endpoin';
const Endpoint=api;

export default function Subscribe() {
  return (
    <div className="subscribe-form">
    <h5>Subscribe to our News letter</h5>
    <br/>
    <form className="text-center">
    <div className="form-row">
    <input className="form-controle" placeholder="Email" label="Email" />
    <Button variant="contained" style={{ backgroundColor:"greenyellow",color:"white",fontWeight:"blod" }}>Subscribe</Button>
    </div>
    </form>
    <style jsx>
    {`
    .subscribe-form{
        margin:40px 0 10px;
        width:auto;
        display:flex;
        flex-direction:column;
        place-items:center;
        justify-content:center;
        text-align:center;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    form{
        display:flex;
        flex-direction:column;
        place-items:center;
        justify-content:center;
        text-align:center;
    }
    .form-controle{
        border:0.3px skyblue solid;
        width:40vw;
        margin-right:3px;
        border-radius:2%;
    }
    `}
    </style>
    </div>
  );
}
