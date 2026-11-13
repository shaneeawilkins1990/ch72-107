import './Product.css';
import QuantityPicker from './QuantityPicker';

function Product() {
    return(
        <div className="product">
           <img src="https://picsum.photos/200" alt="product" />
           <h5>This is my product</h5>
           <label>Price</label>
           <label>Total</label>
           <QuantityPicker/>
        </div>
    )
}

export default Product;