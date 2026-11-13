import "./Catalog.css";
import Product from "../components/Product";


function Catalog() {
    return(
        <div className="catalog">
            <Product/>
           <h5>This is my catalog</h5>
           <label htmlFor="">My Clothing</label>
           <input type="text" />
           <button>Search</button>
        
        </div>
    );
}

function handleSearch(clickEvent) {
    // Add search logic here
    clickEvent.preventDefault();

    console.log();

}

export default Catalog;