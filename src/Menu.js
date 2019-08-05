import React from "react";
import Dish from "./Dish";

function Menu(props) {
  if (props.menu === null) return null;

  const menuKeys = Object.keys(props.menu);

  return menuKeys.map(category => {
    if (props.menu[category].length === 0) return null;

    const items = props.menu[category].map(dish => {
      return (
        <Dish addCartOnClick={props.addCartOnClick} key={dish.id} dish={dish} />
      );
    });

    return (
      <div key={category} className="MenuItems">
        <h2>{category}</h2>
        <div className="MenuItems--items">{items}</div>
      </div>
    );
  });
}

export default Menu;
