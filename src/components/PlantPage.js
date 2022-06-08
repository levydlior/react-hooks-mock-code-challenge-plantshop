import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsArray, setPlantsArray] = useState([])
  const [search, setSearch] = useState('')

  function handleFetchedPlants(fetchedPlants){
    setPlantsArray(fetchedPlants)

  }

  function handleSearchInput(newInput){
      const updatedSearch = newInput
      setSearch(updatedSearch)
  }

  const filteredPlants = plantsArray.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))


function handleNewplantSubmit(newPlantObject){
  const updatedPlantsArray = [...plantsArray, newPlantObject]
  setPlantsArray(updatedPlantsArray)
}
  return (
    <main>
      <NewPlantForm onFormSubmit={handleNewplantSubmit}/>
      <Search onSearchInput={handleSearchInput} search={search}/>
      <PlantList onFetchedPlants={handleFetchedPlants} plantsArray={filteredPlants} />
    </main>
  );
}

export default PlantPage;
