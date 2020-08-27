import React,{useEffect, useState} from 'react';



export default function Test() {

    const [t,sett]=useState("");

useEffect(()=>{
    fetch('http://localhost:3000/api/hello')
              .then(res=>res.json())
              .then(data=>sett(data.name));
})

  return (
    <div>
   test {t}
    </div>
  );
}
