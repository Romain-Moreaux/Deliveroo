import React from "react";

function Dish(props) {
  return (
    <div
      onClick={() => {
        props.addCartOnClick({
          id: props.dish.id,
          title: props.dish.title,
          price: props.dish.price
        });
      }}
      className="MenuItem"
    >
      <div className="MenuItem--card">
        <div className="MenuItem--texts">
          {props.dish.title && <h3>{props.dish.title}</h3>}
          {props.dish.description && <p>{props.dish.description}</p>}
          <div className="MenuItem--infos">
            {props.dish.price && (
              <span className="MenuItem--price">{props.dish.price}</span>
            )}
            {props.dish.popular && (
              <span className="MenuItem--popular">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ff8000"
                  className="feather feather-star"
                  style={{ width: 20, height: 20, marginRight: 5 }}
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Populaire
              </span>
            )}
          </div>
        </div>
        {props.dish.picture && (
          <div className="MenuItem--picture">
            <img
              src={props.dish.picture}
              alt={"photo du plat: " + props.dish.title}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dish;
