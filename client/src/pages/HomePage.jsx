import React from 'react'
import Products from '../helper/data';
import Card from '../components/Card';

const HomePage = () => {
    return (
        <div className="mt-3 mb-3 container d-flex justify-content-center flex-wrap">
            {
                Products.map((product) => (
                    <Card product={product} key={product.id} />
                ))
            }
        </div>
    )
}

export default HomePage
