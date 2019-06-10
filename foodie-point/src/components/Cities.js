import React from "react";
import PropTypes from "prop-types";

class Cities extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.selectedCity === nextProps.selectedCity) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { places, onSelectCity, selectedCity, onGetRestaurants } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5 mb-5">
            <h2 className="mb-4">Welcome to Foodie Point!!!</h2>
            <div className="form-group">
              <label htmlFor="locationFinder">Location Finder</label>
              <select
                value={selectedCity}
                onChange={onSelectCity}
                className="form-control"
                id="locationFinder"
              >
                {places.map((place, id) => (
                  <option key={id} value={place.entity_id}>
                    {place.location}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onGetRestaurants}
              disabled={selectedCity === "noCitySelected"}
            >
              Get Restaurants
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Cities.propTypes = {
  places: PropTypes.array,
  onSelectCity: PropTypes.func,
  selectedCity: PropTypes.string,
  onGetRestaurants: PropTypes.func
};
export default Cities;
