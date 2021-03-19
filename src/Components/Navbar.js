import React from 'react';
import { Link } from 'react-router-dom';
import App from './../App.css';

function Navbar(){
    return (
        <div className="nav-container">
            <div className="brand-name">
                <h2>Shoe</h2>
            </div>
            <div className="nav-list">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/launch" className="nav-link">Launch</Link>
            </div>
        </div>
    )
}

export default Navbar;