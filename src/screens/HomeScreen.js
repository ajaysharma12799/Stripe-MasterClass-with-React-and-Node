import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { API } from '../API'
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await axios.get(API)
        setProducts(response.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="container home-screen mt-5">
            {
                products.length === 0 ? (<Spinner />) : (
                    products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                )
            }
        </div>
    )
}

export default HomeScreen
