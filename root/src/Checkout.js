import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <h1 className="checkout__title">
                    Your Cart
                </h1>
                
                {basket.map(item => (
                    <CheckoutProduct
                        // Don't forget to add a key when rendering in a loop
                       
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ) )}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    );
}

export default Checkout;
