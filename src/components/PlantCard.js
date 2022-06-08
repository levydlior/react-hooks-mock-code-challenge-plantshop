import React, {useState} from "react";

function PlantCard({plant}) {
const [stocked, setStocked] = useState(true)
  const { name, image, price} = plant


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button className="primary" onClick={()=> setStocked(!stocked)}>In Stock</button>
      ) : (
        <button onClick={()=> setStocked(!stocked)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
