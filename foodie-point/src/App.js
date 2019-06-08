import React from "react";
import "./App.css";
import Header from "./components/Header";
import Cities from "./components/Cities";
import Restaurants from "./components/Restaurants";
import cityList from "./_data/locations.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      selectedCity: "noCitySelected",
      restaurants: [],
      isLoading: true,
      hasError: false
    };
  }

  onSelectCity = event => {
    this.setState({
      selectedCity: event.target.value
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
      "search?entity_id=279&entity_type=city&count=5&sort=rating&order=desc"
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
  render() {
    return (
      <React.Fragment>
        <Header />
        <Cities
          places={cityList.locations}
          onSelectCity={this.onSelectCity}
          selectedCity={this.state.selectedCity}
          onGetRestaurants={this.onGetRestaurants}
        />
        <Restaurants />
      </React.Fragment>
    );
  }
}
export default App;
