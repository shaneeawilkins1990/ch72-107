import './Product.css';
import QuantityPicker from './QuantityPicker';

function Product(props) {
    return(
        <div className="product">
            <img src={"/images/" + props.data.image}/> 
           <h5>{props.data.title}</h5>
           <label>$</label>
           <label>{props.data.price}</label>
           
           <QuantityPicker/>
        </div>
    )
}

export default Product;