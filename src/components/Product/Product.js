import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Product.css";

const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="product-images">
                <img className="product-title" src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p>
                    <small>by : {seller}</small>
                </p>
                <br />
                <p>${price}</p>
                <p>
                    <small>only {stock} left in stock - Order soon</small>
                </p>
                <button
                    className="cart-button"
                    onClick={() => props.handleAddProduct(props.product)}
                >
                    <FaShoppingCart />
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
