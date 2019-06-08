import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import home_logo from "../_images/home_logo.png";
import wishList from "../_images/wishlist_logo.png";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="myLogo"
            src={home_logo}
            width="45"
            height="45"
            className="d-inline-block align-top"
          />
          {" FOODIE POINT"}
          <img
            alt="wishList"
            src={wishList}
            width="45"
            height="45"
            className="d-inline-block align-right"
          />
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
