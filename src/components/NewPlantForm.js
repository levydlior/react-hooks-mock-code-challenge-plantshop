import React, {useState} from "react";

function NewPlantForm({onFormSubmit}) {

const [formData, setFormData] = useState({
  name: "",
  image: "",
  price: 0
})
const {name, image, price} = formData

function handleInputChange(e){
 const value = e.target.value
  const key = e.target.name

  setFormData({...formData, [key]: value})
}


function handleFormSubmit(e){
  e.preventDefault()

  const newPlantObject = formData

  fetch(`http://localhost:6001/plants`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newPlantObject)
  }).then(r => r.json())
    .then(newObj => onFormSubmit(newObj))


}


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name}  onChange={handleInputChange}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleInputChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" price={price} onChange={handleInputChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
