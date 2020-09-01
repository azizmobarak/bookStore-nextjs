import React from 'react';
import Listbooks from '../components/listbooks';
import Filter from '../components/filter-bar';

export default function UnderTeen() {

    const products =[
        {
            text:"Notebook",
            img:"https://images-na.ssl-images-amazon.com/images/I/41Vn3yzbxGL._SX331_BO1,204,203,200_.jpg",
            url:"https://www.amazon.com/dp/B08GMWQFXW",
            price:"22"
        },
        {
            text:"Notebook",
            img:"https://images-na.ssl-images-amazon.com/images/I/41Vn3yzbxGL._SX331_BO1,204,203,200_.jpg",
            url:"https://www.amazon.com/dp/B08GMWQFXW",
            price:"26"
        },
        {
            text:"Notebook",
            img:"https://images-na.ssl-images-amazon.com/images/I/41Vn3yzbxGL._SX331_BO1,204,203,200_.jpg",
            url:"https://www.amazon.com/dp/B08GMWQFXW",
            price:"10"
        },
        {
            text:"Notebook",
            img:"https://images-na.ssl-images-amazon.com/images/I/41Vn3yzbxGL._SX331_BO1,204,203,200_.jpg",
            url:"https://www.amazon.com/dp/B08GMWQFXW",
            price:"44"
        },
        {
            text:"Notebook",
            img:"https://images-na.ssl-images-amazon.com/images/I/41Vn3yzbxGL._SX331_BO1,204,203,200_.jpg",
            url:"https://www.amazon.com/dp/B08GMWQFXW",
            price:"12"
        },
        {
            text:"Notebook",
            img:"https://images-na.ssl-images-amazon.com/images/I/41Vn3yzbxGL._SX331_BO1,204,203,200_.jpg",
            url:"https://www.amazon.com/dp/B08GMWQFXW",
            price:"15"
        }
        ];

  return (
    <div className="container-fluid">
    <Filter products={products}/>
    <div className="container-fluid py-2">
    <Listbooks products={products}/>
    </div>
    </div>
  );
}
