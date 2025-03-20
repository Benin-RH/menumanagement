import React, { useState } from "react";
import "../Styles/Menu.css";
import AddMenuItemsForm from "./AddMenuItemsForm";

const Drinks = ({ menu }) => {
  const [drinkList, setDrinkList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const handleAddDrink = (newDrink) => {
    if (menu === "Drinks") {
      setDrinkList([...drinkList, { ...newDrink, menu }]); // Store with menu type
    }
    setOpenForm(false);
  };

  return (
    <>
      <div className="menu-items">
        <h2 className="menu-title">{menu}</h2>
        <button className="add-button" onClick={() => setOpenForm(true)}>
          Add
        </button>

        {/* Display added drinks */}
        {drinkList.map((drink, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-text">
              <h3>
                {drink.menuItem} <span className="price">${drink.price}</span>
              </h3>
              <p>{drink.description}</p>
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
              Screwball peanut butter whiskey, vanilla extract, Amaretto,
              Baileys, egg white, cinnamon
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
      </div>

      {/* Pass menu prop to the form */}
      {openForm && <AddMenuItemsForm menu={menu} onClose={() => setOpenForm(false)} onAdd={handleAddDrink} />}
    </>
  );
};

export default Drinks;
