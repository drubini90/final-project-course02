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
      selectedCity: "noCitySelected",
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
      selectedCity: event.target.options[event.target.selectedIndex].text,
      entityId: event.target.value
    });
  };

  sendGetRequest = uri => {
    const BASE_URL = "https://developers.zomato.com/api/v2.1/";
    const url = `${BASE_URL}${uri}`;
    const API_KEY = "";
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "user-key": `${API_KEY}`
      }
    });
  };

  onGetRestaurants = () => {
    this.sendGetRequest(
      `search?entity_id=${
        this.state.entityId
      }&entity_type=city&count=5&sort=rating&order=desc`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
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
