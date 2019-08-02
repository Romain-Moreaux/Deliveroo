import React from "react";

function Cart(props) {
  let cartIsEmpty = true;
  let element = [];
  var sousTotal = 0;
  var fraisLivraison = 2.5;
  if (props.cart.length >= 1) cartIsEmpty = false;

  if (cartIsEmpty) {
    element.push(
      <div key="empty" className="Cart--empty">
        Votre panier est vide
      </div>
    );
  } else {
    element = props.cart.map(product => {
      let totalProduct = product.price * product.quantity;
      sousTotal += totalProduct;
      return (
        <React.Fragment>
          <div className="Cart--items">
            <div className="Cart--line">
              <div className="Cart--counter">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus-circle"
                    style={{
                      width: 20,
                      height: 20,
                      cursor: "pointer",
                      color: "rgb(0, 206, 189)"
                    }}
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={8} y1={12} x2={16} y2={12} />
                  </svg>
                </span>
                <span>{product.quantity}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus-circle"
                    style={{
                      width: 20,
                      height: 20,
                      cursor: "pointer",
                      color: "rgb(0, 206, 189)"
                    }}
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={12} y1={8} x2={12} y2={16} />
                    <line x1={8} y1={12} x2={16} y2={12} />
                  </svg>
                </span>
              </div>
              <span className="Cart--item-name">{product.name}</span>
              <span className="Cart--amount">{totalProduct.toFixed(2)}€</span>
            </div>
          </div>
        </React.Fragment>
      );
    });

    element.push(
      <React.Fragment>
        <div className="Cart--results">
          <div className="Cart--result-line">
            <span className="Cart--result-name">Sous-total</span>
            <span className="Cart--amount">{sousTotal.toFixed(2)} €</span>
          </div>
          <div className="Cart--result-line">
            <span className="Cart--result-name">Frais de livraison</span>
            <span>{fraisLivraison.toFixed(2)} €</span>
          </div>
        </div>
        <div className="Cart--total">
          <span className="Cart--result-name">Total</span>
          <span className="Cart--amount">
            {(sousTotal + fraisLivraison).toFixed(2)} €
          </span>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="Cart">
      <div className="Cart--card">
        <button
          className={"Cart--validate " + (cartIsEmpty && "Cart--disabled")}
        >
          Valider mon panier
        </button>
        {element}
      </div>
    </div>
  );
}

export default Cart;
