import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ onFetchedPlants, plantsArray }) {
  const plantsItems = plantsArray.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));

 

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((fetchedPlants) => onFetchedPlants(fetchedPlants));
  }, []);

  return <ul className="cards">{plantsItems}</ul>;
}

export default PlantList;
