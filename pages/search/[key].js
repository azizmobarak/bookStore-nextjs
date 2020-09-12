import React, { useState, useEffect } from 'react';
import Listbooks from '../../components/listbooks';
import Filter from '../../components/filter-bar';
import Pagination from '@material-ui/lab/Pagination';
const Endpoint = "http://localhost:2222";
import {useRouter} from 'next/router';

export default function Search() {

    const router=useRouter();

    const [page, setpage] = useState(1);
    const [totalpages, settotalpages] = useState(10);
    const [products, setproducts] = useState([]);
    const [isloading,setloading]=useState(false);

    const getbooks = async() => {
        setloading(true);
        await fetch(Endpoint + '/api/search/' + page + '/' +router.query.key, {
                method: "get",
                credentials: 'same-origin'
            })
            .then(res => res.json())
            .then(data => {
                if (data.message == "OK") {
                    setproducts(data.data);
                    settotalpages(data.pages)
                    setloading(false)
                }
            })
            .catch(err => console.log("err:" + err));

    }

    useEffect(() => {
            getbooks()
    },[router.query.key]);

    const filterchange = async(e, value) => {
        if (value == true) {
            await fetch(Endpoint + '/api/booksbycategorie/' + page + "/" + e.target.value, {
                    method: "get",
                    credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.message == "OK") {
                        setproducts(data.data);
                        settotalpages(data.pages)
                    }
                })
                .catch(err => console.log("err:" + err));
        }
    }

    return ( <
        div className = "container-fluid" >
        < Filter filter = { filterchange } /> 
        < div className = "container-fluid py-2" >
         <Listbooks loading={isloading} products = { products }/>
        <div className = "w-100 d-flex justify-content-center py-4" >
        <Pagination page = { page }
        onChange = {
            (e, value) => setpage(value)
        }
        count = { totalpages }
        variant = "outlined"
        shape = "rounded" / >
        </div> </div > 
        </div>
    );
}

