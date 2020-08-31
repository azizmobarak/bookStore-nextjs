import React from 'react';
import {TextField,Button,Checkbox} from '@material-ui/core';

export default function Register() {
  return (
    <form className="form-group w-75">
    <div className="form-row py-2">
    <TextField className="w-100" label="UserName" type="text" variant="outlined" />
    </div>
    <div className="form-row py-2">
    <TextField className="w-100" label="Email" type="email" variant="outlined" />
    </div>
    <div className="form-row py-2">
    <TextField className="w-100" label="Confirm email" type="email" variant="outlined" />
    </div>
    <div className="form-row py-2">
    <TextField className="w-100" label="Password" type="password" variant="outlined" />
    </div>
    <div className="form-row py-2">
    <TextField className="w-100" label="Confirm password" type="password" variant="outlined" />
    </div>
    <div className="form-row py-2">
     <p className="px-2"><Checkbox value={false}/> I have read and I accept all terms and privacy policy</p>
    </div>
    <div className="form-row py-1">
    <Button className="w-100" variant='contained' color="primary">Create Account</Button>
    </div>
    <div className="form-row">
   <Button className="w-100" color="secondary" variant="contained">Register with GOOGLE</Button>
   </div>
    </form>
  );
}
