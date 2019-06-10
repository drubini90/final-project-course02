import React from "react";

class Cart extends React.Component {
  render() {
    const { restaurants, totalCost } = this.props;
    const restaurantList = restaurants.map((restaurantInfo, idx) => {
      return (
        <li key={idx}>
          <span>Room : {restaurantInfo.title}</span>
          <span>Cost : {restaurantInfo.payment.cost}</span>
          <button
            onClick={() => this.props.onRemoveFromCart(restaurantInfo, idx)}
          >
            Delete
          </button>
        </li>
      );
    });

    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>{restaurantList}</ul>
        <h3>Total Cost : {totalCost}</h3>
      </div>
    );
  }
}

export default Cart;
