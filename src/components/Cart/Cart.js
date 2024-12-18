import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    } else if (total > 15) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <div className="summary-items">
                <h2 className="cart-items">Order Summary</h2>

                <div className="order">
                    <p>Items Ordered : {cart.length} </p>

                    <p>Product Price : ${total.toFixed(2)}</p>

                    <p>Shipping & Handling : ${shipping}</p>

                    <p>Tax + VAT : ${tax}</p>

                    <p className="total">Total Price : ${grandTotal}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
