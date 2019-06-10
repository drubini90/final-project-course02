import React, { Component } from "react";
import Menu from "./Menu";
import Container from "react-bootstrap/Container";

class MenuList extends Component {
  render() {
    // const { menuItems } = this.props;
    // const cuisine = this.props.match.params.id;
    const menuItems = this.props.location.state.menuList;

    const menuList = menuItems.map((data, id) => {
      return <Menu menuItem={data} key={id} />;
    });
    return <Container>{menuList}</Container>;
  }
}

// MenuList.propTypes = {
//  // menuItems: PropTypes.array
// };

export default MenuList;
