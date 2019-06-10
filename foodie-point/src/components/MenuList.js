import React, { Component } from "react";
import Menu from "./Menu";
import Container from "react-bootstrap/Container";
import Header from "./Header";

class MenuList extends Component {
  render() {
    const menuItems = this.props.location.state.menuList;

    const menuList = menuItems.map((data, id) => {
      return <Menu menuItem={data} key={id} />;
    });
    return (
      <Container>
        <Header />
        {menuList}
      </Container>
    );
  }
}

export default MenuList;
