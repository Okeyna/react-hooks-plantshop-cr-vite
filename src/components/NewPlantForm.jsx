import React, { useState } from "react";

function NewPlantForm({ setPlants, plants }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.image && formData.price !== "") {
      fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),  
      })
      .then((response) => response.json())
      .then((newPlant) => {
        setPlants([...plants, newPlant]);
        setFormData({ name: "", image: "", price: "" });
      })
      .catch((error) => console.log(error));
    }
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
