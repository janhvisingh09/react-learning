import React, { useState } from "react";

function MyComponent() {
  const [food, setFood] = useState(["burger", "pizza", "pasta", "salad"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFood(food =>[...food,newFood]);
  }

  function handleRemoveFood() {}

  return (
    <>
      <div>
        <h1>LIST OF FOODS</h1>
        <ul>
          {food.map((foodItem, index) => (
            <li key={index}>{foodItem}</li>
          ))}
        
        </ul>
        <input type="text" placeholder="Add a food item" id="foodInput" />
        <button onClick={handleAddFood}>Add Food</button>
        <button onClick={handleRemoveFood}>Remove Food </button>
      </div>
    </>
  );
}
export default MyComponent;
