import React, { Component } from "react";
import PropTypes from "prop-types";
import Restaurant from "./Restaurant";
import Container from "react-bootstrap/Container";

class Restaurants extends Component {
  render() {
    const { restaurants, onGetMenu, menuList } = this.props;
    const restaurantsList = restaurants.map((data, id) => {
      return (
        <Restaurant
          restaurant={data.restaurant}
          key={id}
          onGetMenu={onGetMenu}
          menuList={menuList}
        />
      );
    });
    return <Container>{restaurantsList}</Container>;
  }
}

Restaurants.propTypes = {
  restaurants: PropTypes.array,
  onGetMenu: PropTypes.func,
  menuList: PropTypes.array
};
export default Restaurants;
