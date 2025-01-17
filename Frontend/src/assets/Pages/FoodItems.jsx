import React, { useState } from 'react';
import '../Css/FoodItems.css';

const FoodItems = () => {
  const [foods, setFoods] = useState([
    { id: 1, name: 'Pizza', cost: '10$', count: 5, image: 'C:\\Users\\balad\\team 24x\\src\\assets\\Images\\pizza.jpg' },
    { id: 2, name: 'Burger', cost: '5$', count: 10, image: 'C:\\Users\\balad\\team 24x\\src\\assets\\Images\\burger.jpg' },
    { id: 3, name: 'Pasta', cost: '8$', count: 7, image: 'C:\Users\balad\team 24x\src\assets\Images\pizza.jpg' },
  ]);
  const [newFood, setNewFood] = useState({ name: '', cost: '', count: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood((prevFood) => ({
      ...prevFood,
      [name]: value,
    }));
  };

  const handleAddFood = () => {
    if (newFood.name && newFood.cost && newFood.count && newFood.image) {
      const id = foods.length > 0 ? foods[foods.length - 1].id + 1 : 1;
      setFoods([...foods, { id, ...newFood }]);
      setNewFood({ name: '', cost: '', count: '', image: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleDeleteFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  return (
    <div className="food-items">
      <h1>Food Items</h1>
      <div className="food-list">
        {foods.map((food) => (
          <div key={food.id} className="food-item">
            <img src={food.image} alt={food.name} />
            <div>
              <h2>{food.name}</h2>
              <p>Cost: {food.cost}</p>
              <p>Count: {food.count}</p>
            </div>
            <button onClick={() => handleDeleteFood(food.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-food">
        <h2>Add Food</h2>
        <input type="text" name="name" placeholder="Food Name" value={newFood.name} onChange={handleChange} />
        <input type="text" name="cost" placeholder="Cost" value={newFood.cost} onChange={handleChange} />
        <input type="number" name="count" placeholder="Count" value={newFood.count} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image Name" value={newFood.image} onChange={handleChange} />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </div>
  );
};

export default FoodItems;
