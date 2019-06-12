import React from "react";
import "./App.css";
import Header from "./components/Header";
import Cities from "./components/Cities";
import Restaurants from "./components/Restaurants";
import cityList from "./_data/locations.json";
import menuCardData from "./_data/dailyMenu.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      selectedCity: 0,
      entityId: 0,
      restaurants: [],
      menuCardData: menuCardData,
      menuList: [],
      isLoading: true,
      hasError: false
    };
  }

  onSelectCity = event => {
    console.log(event);
    this.setState({
      selectedCity: event.target.selectedIndex,
      entityId: event.target.value
    });
  };

  onGetRestaurants = () => {
    const BASE_URL = process.env.BASE_URL;
    fetch(`${BASE_URL}/restaurants?entity_id=${this.state.entityId}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          restaurants: data.restaurants,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          hasError: true,
          isLoading: false
        });
      });
  };

  onGetMenu = cuisine => {
    this.setState({
      menuList: this.state.menuCardData.menu[0].items
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Cities
          places={cityList.locations}
          onSelectCity={this.onSelectCity}
          selectedCity={this.state.entityId}
          onGetRestaurants={this.onGetRestaurants}
        />
        <Restaurants
          restaurants={this.state.restaurants}
          onGetMenu={this.onGetMenu}
          menuList={this.state.menuList}
        />
      </React.Fragment>
    );
  }
}
export default App;
