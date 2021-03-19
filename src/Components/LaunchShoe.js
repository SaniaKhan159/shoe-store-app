import React from 'react';
import Shoes from './../shoes.json';
import { useParams } from 'react-router';

function LaunchShoe() {
    const{ slug } = useParams();
    const shoe = Shoes[slug];
  
    if(!shoe){
      return <h2>Not Found</h2>
    }
  
    const{ name, img } = shoe;
  
    return (
      <div>
        <h2>{name}</h2>
        <img src={img} alt={name} height={500} />
      </div>
    )
}

export default LaunchShoe;