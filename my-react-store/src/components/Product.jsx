
import './Product.css';
import QuantityPicker from './QuantityPicker';
import { useState } from 'react';

function Product(props) {
    const [qty, setQty] = useState(1);

    function calculateTotal() {
        let total = props.data.price * qty;
        return total;
    }

    function handleQtyChange(quantity) {
        console.log(quantity);
        setQty(quantity);
    }

    //calculateTotal() is a function that calculates the total price of the product based on the quantity selected by the user. It multiplies the price of the product (props.data.price) by the quantity (qty) and returns the total.
    // communication between the child and parent component is done through props. The child component (QuantityPicker) calls the onChange function passed down from the parent component (Product) whenever the quantity changes. The parent component then updates its state (qty) with the new quantity value, which triggers a re-render of the Product component and updates the total price displayed to the user.

    return (
        <div className="product">
            <img src={"/images/" + props.data.image} />

            <h5>{props.data.title}</h5>

            <label>${props.data.price}</label>

            <label>${calculateTotal()}</label>

            <QuantityPicker onChange={handleQtyChange} />
        </div>
    );
}

export default Product;
