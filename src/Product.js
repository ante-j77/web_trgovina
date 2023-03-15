import React from "react";
import "./Product.css";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="product" />

      <button onClick={addToBasket}>
        U košaricu
        <span>
          <ShoppingBasket />
        </span>
      </button>
    </div>
  );
};

export default Product;
