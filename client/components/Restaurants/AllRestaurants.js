import React from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "../../store/restaurants";
import { Link } from "react-router-dom";

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
        <h1>hello guys</h1>
        {restaurants.map((restaurant) => {
          return (
            <div restaurant={restaurant} key={restaurant.id}>
              <p>{restaurant.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRestaurants: () => dispatch(fetchRestaurants()),
  };
};

export default connect(mapState, mapDispatch)(AllRestautants);
