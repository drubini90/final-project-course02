import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";

class Restaurant extends React.Component {
  // componentWillMount() {
  //   const { onGetMenu } = this.props;
  //   onGetMenu();
  // }
  componentDidMount() {
    // const { onGetMenu } = this.props;
    this.props.onGetMenu("test");
  }
  render() {
    const { restaurant, menuList } = this.props;
    const cuisine = "Default";
    console.log(restaurant.name);
    console.log(restaurant.location);

    return (
      <React.Fragment>
        <Row>
          <Col>
            <Image
              src={restaurant.thumb}
              rounded
              width="150"
              height="100"
              alt=""
            />
          </Col>
          <Col>
            <h3>{restaurant.name}</h3>
            <div>Cuisine: {restaurant.cuisines}</div>
            <div>Location : {restaurant.location.address}</div>
          </Col>
          <Col>
            <Link
              to={{
                pathname: `/MenuList/${cuisine}`,
                state: { menuList }
              }}
              Component={MenuList}
              className="creature"
            >
              View Menu 1
            </Link>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
Restaurant.propTypes = {
  restaurant: PropTypes.object,
  onGetMenu: PropTypes.func,
  menuList: PropTypes.array
};
export default Restaurant;
