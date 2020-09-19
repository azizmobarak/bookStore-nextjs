import React,{useState} from 'react';
import {Button, Select, FormControl,MenuItem,TextField } from '@material-ui/core';
import { Save,CloudUpload, Refresh } from '@material-ui/icons';
import sessionexpired from '../sessionexpired';
import {useRouter} from 'next/router';
import api from '../../db/Endpoin';
const Endpoint=api;

export default function Settings(props) {

    const [themcolor,setthemcolor]=useState('#ffffff');
    const [themfont,setthemfont]=useState('Them Font');
    const [logofile,setlogofile]=useState("");
    const [img1,setimg1]=useState("");
    const [img2,setimg2]=useState("");
    const [img3,setimg3]=useState("");
    const router = useRouter();

//change color
const newcolor=()=>{
 changecolor(themcolor,props,router);
}
//change font
const newfont=()=>{
  changefont(themfont,props,router);
}

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
    <div className="d-flex justify-content-between w-75 text-white align-items-center">
    <input 
    onChange={(e)=>setthemcolor(e.target.value)}
     className="form-control w-75" 
     type="color"
      name="themcolor" />
    <Button 
    style={{ marginLeft:"2%" }}
     className="px-4 bg-info" 
     color="primary" variant="contained"
     onClick={()=>newcolor()} >
     <Refresh/>
     </Button>
    </div>
    </div>
<br/><br/>
    <div className="w-100 d-flex justify-content-between">
    <div className="card-title">
    Them Font
    </div>
    <div className="d-flex justify-content-between w-75 text-white align-items-center">
    <FormControl className="py-1 bg-white w-75">
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

      <Button 
      onClick={()=>newfont()}
      style={{ marginLeft:"2%" }} 
      className="py-2 bg-info" color="primary" 
      variant="contained">
      <Refresh/>
      </Button>
    </div>

    </div>

<br/><br/>

<div className="w-100 d-flex flex-column">
      <div className="card-title">
       Slider 
      </div>
  <div
   className="d-flex justify-content-between w-100 text-white align-items-center">
     <form onSubmit={(e)=>changeslider(e,img1,img2,img3,props,router)} id="slider" className="d-flex flex-column justify-content-between w-100">
        <div className="d-flex justify-content-between w-100">
        <div>
        <label 
        className="labelfile-dashbord" 
        htmlFor="img1" >image 1 <CloudUpload/>
        </label>
        <input 
        onChange={(e)=>setimg1(e.target.value)}
        type="file" 
        name="img1"
         id="img1" hidden />
        </div>
     
         <div>
         <label className="labelfile-dashbord"
         htmlFor="img2" >
         image 2 <CloudUpload/>
         </label>
        <input
        onChange={(e)=>setimg2(e.target.value)}
        type="file"
         name="img2" 
         id="img2"
          hidden />
         </div>
     
         <div>
         <label 
         className="labelfile-dashbord"
          htmlFor="img3" >
          image 3 <CloudUpload/>
          </label>
         <input 
         onChange={(e)=>setimg3(e.target.value)}
         type="file"
          name="img3" 
          id="img3" 
          hidden />
         </div>

        </div>
        <Button 
        type="submit"
        className="w-100 bg-info text-white" 
        color="primary"
        variant="outlined"
         >Change slider <Refresh/>
         </Button>
     </form>
    </div>
    </div>
    <br/>
    <div className="w-100 d-flex justify-content-between">
    <div className="card-title">
    App Logo
    </div>
    <div className="d-flex justify-content-between text-white align-items-center w-75">
     <form
       id='logoform'
       onSubmit={(e)=>changelogo(e,logofile,props,router)} 
       className="d-flex justify-content-between text-white align-items-center w-100" 
       >
     <label 
     className="labelfilelogo-dashbord w-50 text-center" 
     htmlFor="logo" >
     Logo <CloudUpload/>
     </label>
     <input 
     onChange={(e)=>setlogofile(e.target.value)}
     type="file"
      name="logo"
       id="logo" hidden />
       <Button 
       type='submit'
       style={{ marginTop:"-8px" }}
       className="w-25 bg-info text-white py-2" 
       color="primary"
       variant="outlined"
        ><Refresh/>
        </Button>
     </form>
    </div>
    </div>
<br/><br/>
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


//color update 
const changecolor=(color,props,router)=>{
try{
  fetch(Endpoint+"api/admin/them/color",{
    method:"PUT",
    credentials:"include",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      color:color
    })
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.message==="OK")
    {
      props.alert({color:"success",variant:"filled",text:data.data});
    }
    else{
      if(data.message==="session"){
        sessionexpired(router);
      }
      props.alert({color:"error",variant:"filled",text:data.data});
    }
  })
}catch{
  props.alert({color:"error",variant:"filled",text:data.data});
}
}

///// font function
const changefont=(font,props,router)=>{
try{
  fetch(Endpoint+"api/admin/them/font",{
    method:"PUT",
    credentials:"include",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      font:font
    })
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.message==="OK")
    {
      props.alert({color:"success",variant:"filled",text:data.data});
    }
    else{
      if(data.message==="session"){
        sessionexpired(router);
      }
      props.alert({color:"error",variant:"filled",text:data.data});
    }
  })
}catch{
  props.alert({color:"error",variant:"filled",text:"error try later"});
}
}



//update Logo 
const changelogo=(e,logofile,props,router)=>{
  e.preventDefault();
var form = new FormData(document.getElementById('logoform'));
form.append('logo',logofile);
fetch(Endpoint+"api/admin/them/logo",{
  method:"POST",
  credentials:"include",
  body:form
})
.then(res=>res.json())
.then(data=>{
  if(data.message==="OK")
  {
    props.alert({color:"success",variant:"filled",text:data.data});
  }
  else{
    if(data.message==="session"){
      sessionexpired(router);
    }
    props.alert({color:"error",variant:"filled",text:data.data});
  }
})
}

//update slider 
const changeslider=(e,img1,img2,img3,props,router)=>{
  e.preventDefault();
var form = new FormData(document.getElementById('slider'));
form.append('img1',img1);
form.append('img2',img2);
form.append('img3',img3);
fetch(Endpoint+"api/admin/them/slider",{
  method:"POST",
  credentials:"include",
  body:form
})
.then(res=>res.json())
.then(data=>{
  if(data.message==="OK")
  {
    props.alert({color:"success",variant:"filled",text:data.data});
  }
  else{
    if(data.message==="session"){
      sessionexpired(router);
    }
    props.alert({color:"error",variant:"filled",text:data.data});
  }
})
}