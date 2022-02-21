import React from "react";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../store/singleRestaurant";
import AddReview from "./AddReview";

import { Link } from "react-router-dom";

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class SingleRestaurant extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      const restaurantId = this.props.match.params.restaurantId;
      this.props.getRestaurant(restaurantId);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const restaurant = this.props.selectedRestaurant || {};
    const reviews = restaurant.Reviews || [];
    console.log(restaurant);

    return (
      <div>
        <div>
          <h1>{restaurant.name}</h1>
          <h2>{restaurant.foodType}</h2>
        </div>
        <h1>Reviews- </h1>
        {reviews.map((review) => {
          return (
            <div review={review} key={review.id}>
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          );
        })}
        <div>
          <AddReview />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    selectedRestaurant: state.selectedRestaurant,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRestaurant: (id) => dispatch(fetchRestaurant(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleRestaurant);
