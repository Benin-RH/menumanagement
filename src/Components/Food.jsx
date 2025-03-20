import React, { useState } from "react";
import "../Styles/Menu.css";
import AddMenuItemsForm from "../Components/AddMenuItemsForm.jsx";

const Food = ({ menu }) => {
  const [foodList, setFoodList] = useState([]); 
  const [openForm, setOpenForm] = useState(false);

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, { ...newFood, menu }]); 
  };

  return (
    <>
      <div className="menu-items">
        <h2 className="menu-title">{menu}</h2>
        <button className="add-button" onClick={() => setOpenForm(true)}>Add</button>

        {/* Display dynamically added menu items */}
        {foodList.map((food, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-text">
              <h3>
                {food.menuItem} <span className="price">${food.price}</span>
              </h3>
              <p>{food.description}</p>
            </div>
          </div>
        ))}

        {/* Static menu items */}
        <div className="menu-item">
          <div className="menu-text">
            <h3>
              CINNAMON TOAST CRUNCH <span className="price">$16</span>
            </h3>
            <p>
              Screwball peanut butter whiskey, vanilla extract, Amaretto, Baileys,
              egg white, cinnamon
            </p>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-text">
            <h3>
              BAR 42 MARY <span className="price">$14</span>
            </h3>
            <p>
              Tito’s, tomato juice, Worcestershire, celery salt, black pepper,
              Tabasco, fully loaded
            </p>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-text">
            <h3>
              MOËT SPRITZ <span className="price">$20</span>
            </h3>
            <p>
              Aperol, St. Germain, botanical liqueur, fresh lime juice, mini love
              Moët topper
            </p>
          </div>
        </div>
      </div>

      {/* Pass menu and onAdd function to save items */}
      {openForm && <AddMenuItemsForm menu={menu} onClose={() => setOpenForm(false)} onAdd={handleAddFood} />}
    </>
  );
};

export default Food;
