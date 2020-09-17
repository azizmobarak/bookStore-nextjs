import React,{useState,useEffect} from 'react';
import Listbooks from '../components/listbooks';
import Filter from '../components/filter-bar';
import Pagination from '@material-ui/lab/Pagination';
import api from '../components/db/Endpoin';
const Endpoint=api;

export default function Newest() {

const [page,setpage]=useState(1);
const [totalpages,settotalpages]=useState(10);
const [products,setproducts]=useState([]);
const [isloading,setloading]=useState(false);

const getbooks=async()=>{
    setloading(true)
    await fetch(Endpoint+'api/allbooks/'+page,{
        method:"get",
        credentials:'same-origin'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.message=="OK"){
          setproducts(data.data);
        settotalpages(data.pages)
        setloading(false)
        }
      })
      .catch(err=>0);
        
}

   useEffect(()=>{
  getbooks();
   },[page])

  const filterchange= async(e,value)=>{
      setloading(true)
   if(value==true)
   {
    await fetch(Endpoint+'api/booksbycategorie/'+page+"/"+e.target.value,{
      method:"get",
      credentials:'same-origin'
    })
    .then(res=>res.json())
    .then(data=>{
    if(data.message=="OK"){
      setproducts(data.data);
      settotalpages(data.pages)
      setloading(false);
    }
    })
    .catch(err=>0);
   }
  }

  return (
    <div className="container-fluid">
    <Filter filter={filterchange}  products={products}/>
    <div className="container-fluid py-2">
    <Listbooks loading={isloading} products={products}/>

<div className="w-100 d-flex justify-content-center py-4" >
<Pagination page={page} onChange={(e,value)=>setpage(value)} count={totalpages} variant="outlined" shape="rounded" />
</div>
    </div>
    </div>
  );
}
