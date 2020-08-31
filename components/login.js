import React from 'react';
import {TextField,Button} from '@material-ui/core';

export default function Login() {
  return (
   <form className="form-group w-50">
   <div className="form-row py-2">
   <TextField className="w-100" label="Email" type="email" variant="outlined" />
   </div>
   <div className="form-row py-2">
   <TextField className="w-100" label="Password" type="password" variant="outlined" />
   </div>
   <div className="form-row py-1">
   <Button className="w-100" variant='contained' color="primary">Login</Button>
   </div>
   <div className="form-row">
   <Button className="w-100" color="secondary" variant="contained">Login with GOOGLE</Button>
   </div>
   </form>
  );
}
