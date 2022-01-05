import React from 'react'
import './Product.css';


const Product = ({ product }) => {

    return (
        <div className='productCard__wrapper'>
            <div>
                <img className='productCard__img' src={product.image} alt='' />
                <h4>{product.name}</h4>
                <div className='ProductCard__price'>
                    <h5>${product.price}</h5>
                    <h5>{product.desc}</h5>
                </div>
            </div>

        </div>
    )
}

export default Product;
