import React from "react";
import "./App.css";
import Header from "./components/Header";
import Cities from "./components/Cities";
import Restaurants from "./components/Restaurants";
import cityList from "./_data/locations.json";
import menuCardData from "./_data/dailyMenu.json";
import MenuList from "./components/MenuList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurant from "./components/Restaurant";

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
  // componentDidMount() {
  //   fetch("./_data/dailyMenu.json")
  //     .then(res => res.text())
  //     .then(menuCard => {
  //       console.log(menuCard);
  //       this.setState({ menuCard });
  //     });
  //   // this.setState({
  //   //   menuCard: menuCard.menu[0].items
  //   // });
  // }
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
    const API_KEY = "2562a2e798a108aef589b6b3a6eac00f";
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
    console.log(cityList);
    console.log(menuCardData.menu[0].items);
    this.setState({
      menuList: this.state.menuCardData.menu[0].items
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Restaurant" component={Restaurant} />
          <Route path="/MenuList/:id" component={MenuList} />
        </Switch>

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
      </Router>
    );
  }
}
export default App;
