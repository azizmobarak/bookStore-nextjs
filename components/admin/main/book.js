import React,{useState} from 'react';
import {TextField,Button,Select,InputLabel,MenuItem,FormControl} from '@material-ui/core';
import {Add} from '@material-ui/icons';

export default function Book() {

    const [categorie,setcategorie]=useState('Journal');
    const handleChange=(e)=>{
        setcategorie(e.target.value);
    }

  return (
    <div className="d-flex justify-content-center align-items-center w-100">
   <form className="d-flex flex-column w-50 h-100 justify-content-center p-3 bg-white rounded">
   <TextField 
   required={true}
   color="secondary"
    name="name"
    className="py-2"
     variant="outlined" 
     label="Book Name" />
   <TextField 
   multiline={true}
   rows={3}
   required={true}
   color="secondary"
   name="description" 
   className="py-2" 
   variant="outlined"
    label="Description" />
   <FormControl className="py-2">
        <InputLabel id="categorie-label">Categorie</InputLabel>
        <Select
          required={true}
          labelId="categorie-label"
          id="categories"
          value={categorie}
          onChange={handleChange}
          name="categorie1"
        >
          <MenuItem value="journal">Journal or Duary</MenuItem>
          <MenuItem value="book">Book</MenuItem>
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="clothes">Clothes</MenuItem>
          <MenuItem value="tools">Bag Tools</MenuItem>
          <MenuItem value="sport">Sport</MenuItem>
        </Select>
      </FormControl>
    {categorie==="other" ?
    <TextField
   color="secondary"
    name="categorie2"
     className="py-2"
      variant="outlined" 
      label="specify Categorie" />
    :
    null
    }
    <TextField
    required={true}
   color="secondary"
    name="price"
     className="py-2"
      variant="outlined"
       label="Price" 
       type="number" />
    <TextField 
    required={true}
   color="secondary"
    name="url"
    className="py-2"
     variant="outlined" 
     label="Product URL"
      type="text" />
    <TextField 
    required={true}
   color="secondary"
    name="picture"
    className="py-2" 
    variant="outlined" 
    label="Image URL" 
    type="text" />
    <Button 
    variant="contained" 
     color="primary">
     New Book <Add fontSize="default" />
     </Button>
   </form>
    </div>
  );
}
