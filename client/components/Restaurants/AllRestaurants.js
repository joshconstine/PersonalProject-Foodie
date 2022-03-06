import React from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "../../store/restaurants";
import RestaurantCard from "./RestaurantCard";

export class AllRestautants extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      this.props.getRestaurants();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const restaurants = this.props.restaurants || [];

    return (
      <div>
        <div id="headder">
          <h1>Restaurants near you...</h1>
        </div>
        <div className="restaurant-container">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            );
          })}
        </div>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    restaurants: state.restaurants,
    selectedRestaurant: state.selectedRestaurant,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRestaurants: () => dispatch(fetchRestaurants()),
  };
};

export default connect(mapState, mapDispatch)(AllRestautants);
