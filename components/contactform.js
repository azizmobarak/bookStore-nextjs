import React from 'react';
import {Button} from '@material-ui/core';

export default function ContactForm() {
  return (
    <form className="form-group w-75" noValidate autoComplete="off">
    <div className="form-row py-2">
    <input type="email" className="form-control" id="email" placeholder="Email : Email@Email.com" ></input>
    </div>
    <div className="form-row py-2">
    <input type="text" className="form-control" id="subject" placeholder="your Question?"></input>
    </div>
    <div className="form-row py-2">
    <textarea rows="4" className="form-control" id="subject" placeholder="Message"></textarea>
    </div>
    <div className="form-row justify-content-center py-2">
   <Button style={{ marginTop:'10px' }} type="submit" color="primary" variant="contained" >SEND MESSAGE</Button>
    </div>
    </form>
  );
}
