import React from 'react'
import './Home.css';
import Product from './Product';
import products from './data';

const Home = () => {
    return (
        <div className='products__wrapper'>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Home
