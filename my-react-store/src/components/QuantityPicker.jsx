import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
    
    const [quantity, setQuantity] = useState(1); /*creating a variable*/
    // Handlers for increasing and decreasing the quantity
    //       name        function            initial value
    // let [varName, fucName] = useState(initialValue);

   
    function handleDecrease() {
        let prevValue = quantity - 1;
        if (quantity > 0) {
            setQuantity(prevValue);
            props.onChange(prevValue);//Notifying the parent component about the change in quantity
        }
    }
 function handleIncrease() {
        let nextVal = quantity + 1;
        // Update the state with the new quantity, Quantity = 1
        setQuantity(nextVal);
        props.onChange(nextVal); //Notifying the parent component about the change in quantity
    }

  return (
    <div className="quantity-picker"> {/* className is JS */}
      <button className="btn-minus btn btn-primary" onClick={handleDecrease}>-</button>
      <label className="label-qty">{quantity}</label>
      <button className="btn-plus btn btn-primary" onClick={handleIncrease}>+</button>
    </div>
  );
}

export default QuantityPicker;