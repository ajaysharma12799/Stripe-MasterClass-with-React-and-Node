import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';

const Header = () => {
    const {totalItems} = useCart();

    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">React Shopping Cart</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-items pe-3">
                            <Link to="/" className="fs-4 text-white">
                                Home
                            </Link>
                        </li>
                        <li className="nav-items pe-2">
                            <Link to="/Cart" className="fs-4 text-white">
                                Cart
                                ({totalItems})
                            </Link>
                        </li>
                    </ul>
                </div>                        
            </div>
        </nav>
    )
}

export default Header
