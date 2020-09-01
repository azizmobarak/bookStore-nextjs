import React from 'react';
import {TextField,Button} from '@material-ui/core';

export default function Login() {
  return (
   <form className="form-group w-50">
   <div className="form-row py-2">
   <TextField id="email" className="w-100" label="email"  type="email" variant="outlined" />
   </div>
   <div className="form-row py-2">
   <TextField id="password" className="w-100" label="password"  type="password" variant="outlined" />
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
