import React from 'react';
import Shoes from './../shoes.json';
import { Link } from 'react-router-dom';

function LaunchIndex() {
    return (
        <ul className="product-main">
            {Object.entries(Shoes).map(([slug, { name, img }]) => (
                <li key={slug} className="product-container">
                    <Link to={`/launch/${slug}`} className="product-link">
                        <h2>{name}</h2>
                        <img src={img} alt={name} height={150} />
                    </Link>
                </li>
            ))}
        </ul>

    )
}

export default LaunchIndex;