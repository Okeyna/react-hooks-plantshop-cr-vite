import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]); // TODO: add state for the list of plants
  const [searchTerm, setSearchTerm] = useState(""); // TODO: add state for search term

  const fetchPlants = () => {
    // TODO: make an api call to get the list of plants
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data)
      })
      .catch((error) => console.log(error)); // TODO: handle errors from the dat
  };

  const visibilePlants = searchTerm ? plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase())) : plants; // TODO: filter the list of plants based on the search term
  
  useEffect(() => {
    fetchPlants(); // TODO: add a call to your API
  }, []); // TODO: add an empty dependency array for useEffect

  return (
    <main>
      <NewPlantForm setPlants={setPlants} plants={plants} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={visibilePlants} />
    </main>
  );
}

export default PlantPage;
