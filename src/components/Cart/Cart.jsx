import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { addItem, removeItem } from "../../redux/ducks/cartItems";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.cart?.items);
  const [value, setValue] = useState("");

  const onAddItem = () => {
    if (value.trim()) {
      dispatch(addItem(value));
      setValue("");
    }
  };

  const onDeleteItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className="container">
      <h3>Add and remove cart item</h3>
      <div className="input-container">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={onAddItem}>Add item</button>
      </div>
      <ul className="list-item-container">
        {cartItems &&
          cartItems?.map((item, index) => (
            <div key={index}>
              <li>
                {item}
                <button onClick={() => onDeleteItem(index)}>Remove</button>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};
