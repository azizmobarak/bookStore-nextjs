import React,{useState} from 'react';
import {Button, Select, FormControl,MenuItem,TextField,InputLabel } from '@material-ui/core';
import { Save,CloudUpload, Refresh } from '@material-ui/icons';

export default function Settings() {

    const [themcolor,setthemcolor]=useState('#ffffff');
    const [themfont,setthemfont]=useState('Them Font');

  return (
    <div className="w-100">
    <div className="row">
    <div className="col-sm-4">
    <div classsName="card">
    <div className="card-header">
    <h4>
    Them settings
    </h4>
    </div>
    <div className="card-body">
    <div className="w-100 d-flex justify-content-between">
    <div className="card-title">
    Them color
    </div>
    <div className="d-flex justify-content-between w-50 text-white align-items-center">
    <input 
    onChange={(e)=>setthemcolor(e.target.value)}
     className="form-control w-75" 
     type="color"
      name="themcolor" />
    <p className="px-2">
    {themcolor}
    </p>
    </div>
    </div>
<br/><br/>
    <div className="w-100 d-flex justify-content-between">
    <div className="card-title">
    Them Font
    </div>
    <div className="d-flex justify-content-between w-50 text-white align-items-center">
    <FormControl className="p-2 bg-white w-100">
        <Select
         variant="standard"
          required={true}
          labelId="categorie-label"
          id="categories"
          value={themfont}
          onChange={(e)=>setthemfont(e.target.value)}
          name="themfont"
        >
          <MenuItem style={{ fontFamily:"cursive" }} value="cursive">cursive</MenuItem>
          <MenuItem style={{ fontFamily:"fantasy" }} value="fantasy">fantasy</MenuItem>
          <MenuItem style={{ fontFamily:"inherit" }} value="inherit">inherit</MenuItem>
          <MenuItem style={{ fontFamily:"initial" }} value="initial">initial</MenuItem>
          <MenuItem style={{ fontFamily:"monospace" }} value="monospace">monospace</MenuItem>
          <MenuItem style={{ fontFamily:"revert" }} value="revert">revert</MenuItem>
          <MenuItem style={{ fontFamily:"sans-serif" }} value="sans-serif">sans-serif</MenuItem>
          <MenuItem style={{ fontFamily:"serif" }} value="serif">serif</MenuItem>
          <MenuItem style={{ fontFamily:"-moz-initial" }} value="-moz-initial">moz-initial</MenuItem>
        </Select>
      </FormControl>
    </div>

    </div>

<br/><br/>

<div className="w-100 d-flex flex-column">
      <div className="card-title">
       Slider 
      </div>
  <div
   className="d-flex justify-content-between w-100 text-white align-items-center">
     <form>
          <label 
          className="labelfile-dashbord" 
          htmlFor="img1" >image 1 <CloudUpload/>
          </label>
          <input 
          type="file" 
          name="img1"
           id="img1" hidden />
     </form>
     <form>
          <label className="labelfile-dashbord"
           htmlFor="img2" >
           image 2 <CloudUpload/>
           </label>
          <input type="file"
           name="img2" 
           id="img2"
            hidden />
     </form>
     <form>
          <label 
          className="labelfile-dashbord"
           htmlFor="img3" >
           image 3 <CloudUpload/>
           </label>
          <input 
          type="file"
           name="img3" 
           id="img3" 
           hidden />
     </form>
    </div>
    </div>
    <br/>
    <div className="w-100 d-flex justify-content-between">
    <div className="card-title">
    App Logo
    </div>
    <div className="d-flex justify-content-between text-white align-items-center">
     <form>
     <label 
     className="labelfilelogo-dashbord" 
     htmlFor="logo" >
     Logo <CloudUpload/>
     </label>
     <input 
     type="file"
      name="logo"
       id="logo" hidden />
     </form>
    </div>
    </div>
<br/><br/>
    <Button 
    className="w-100 bg-info text-white" 
    color="primary"
    variant="outlined"
     >Apply all changes <Refresh/>
     </Button>

    </div>
    </div>
    </div>

    <div className="col-sm-8">
    <div className="row">
    <div className="col-sm-6">
    <h4>Pages Settings</h4>

    <div className="card text-dark">
    <div className="card-title font-weight-bolder h6 p-2">
    FAQ
    </div>
    <form 
    className="form-group d-flex flex-column justify-content-between p-2">
       <div className="form-row">
        <TextField 
          multiline={true}
          rows={6}
          color="primary"
          name="faq" 
          className="p-2 w-100" 
          variant="outlined"
          label="FAQ" />
       </div>
  <div className="form-row">
    <Button 
    className="form-control"
    variant="contained" 
    color="primary">
    Save <Save/> 
    </Button>
    </div>
   </form>
    </div>
    </div>


 <div className="col-sm-6">
    
     <div className="card text-dark">
          <div className="card-title font-weight-bolder h6 p-2">
            Privacy Policy
           </div>
        <form 
        className="form-group d-flex flex-column justify-content-between p-2">
           <div className="form-row">
            <TextField 
                  multiline={true}
                   rows={8}
                   color="primary"
                   name="privacy" 
                   className="p-2 w-100" 
                   variant="outlined"
                   label="Privacy Policy" />
              </div>
         <div className="form-row">
           <Button 
             className="form-control"
             variant="contained" 
              color="primary">
              Save <Save/> 
              </Button>
         </div>
          </form>
       </div>
  </div>
</div>
   <br/>
<div className="row">
    <div className="col-sm-12">
        <div className="card">
          <div className="card-title">
            <h6 className="text-dark p-2">Email Settings</h6>
     </div>
    <div className="card-body">
       <form className="form-group d-flex w-100">
         <div className="form-row w-75 px-2">
            <TextField
            className="form-control
             px-2" variant="outlined"
              label="New Email"/>
    </div>
    <div className="form-row px-2 align-items-end">
       <Button 
       style={{ marginTop:"10%" }} 
       variant="contained"
        color="primary" >
        Save <Save/>
        </Button>
    </div>
  </form>
 </div>
</div>
</div>
</div>  
</div>
</div>
</div>
  );
}
