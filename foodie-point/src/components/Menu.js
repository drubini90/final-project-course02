import React, { Component } from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class Menu extends Component {
  render() {
    const { menuItem } = this.props;
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Image
              src={menuItem.image}
              rounded
              width="150"
              height="100"
              alt=""
            />
          </Col>
          <Col>
            <h3>{menuItem.name}</h3>
            <div>Description: {menuItem.description}</div>
          </Col>
          <Col>
            <h2>Price: {menuItem.price}</h2>
          </Col>
          <Col>
            <button type="button" variant="outline-info">
              Add To Cart
            </button>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

Menu.propTypes = {
  menuItem: PropTypes.object
};

export default Menu;
