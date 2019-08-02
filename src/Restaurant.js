import React from "react";

function Restaurant(props) {
  return (
    <div className="RestaurantInfos">
      <div className="RestaurantInfos--center">
        <div className="RestaurantInfos--texts">
          <h1>{props.restaurant.name}</h1>
          <p>{props.restaurant.description}</p>
        </div>
        <img
          className="RestaurantInfos--cover"
          src={props.restaurant.picture}
          alt={`${props.restaurant.name}, vend des plats: ${
            props.restaurant.categories
          }`}
        />
      </div>
    </div>
  );
}

export default Restaurant;
