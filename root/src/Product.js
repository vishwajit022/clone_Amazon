import React from "react";
import "./Product.css";
import {useStateValue} from './StateProvider';

function Product({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                title: title,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small><strong>{price}</strong></p>
                <div className="product__rating">
                     {Array(rating)
                    .fill() /**To fill the array */
                    .map(()=>(
                    <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} height="300px" />
        <button onClick={addToBasket} >Add to Cart</button>
        </div>
    )
}
export default Product;