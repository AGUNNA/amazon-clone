import React from 'react';
import "./product.css"
import { useStateValue } from './StateProvider.js';

function Product({id, title, image, price, rating }) {

  const [{ basket }, dispatch ] = useStateValue();

  const addToBasket = () => {
    //add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }; 


  return (
    <div className='product'>
      <div className="product__info">
      <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
            {/* this code sets the rating  */}
            {Array(rating)
                .fill()
                .map((_) => (
                    <p>⭐️</p>
                ))}
        </div>
      </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product