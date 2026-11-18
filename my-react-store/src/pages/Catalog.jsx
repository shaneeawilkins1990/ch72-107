import "./Catalog.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import DataService from "../dataServices/dataService";



function Catalog() {
   const [products, setProducts] = useState([]);
   // const products = [];
    useEffect(() => {
        //Load my data from the dataService
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data); 
    }, []); //The empty array means that this run only happens once
    return(
        <div className="catalog">
           {products.map(prod => <Product key={prod._id} data={prod} />)}
                {/* for(i=0;i<products;i++)
                let product = products[i]; */}  
        
        </div>
    );
}


export default Catalog;