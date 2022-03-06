import React from "react";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../store/singleRestaurant";
import AddReview from "./AddReview";

import { fetchDeleteReview } from "../../store/reviews";
import ReviewCard from "../Reviews/ReviewCard";
import RestaurantCard from "./RestaurantCard";
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

  async handleDelete(review) {
    await this.props.onDelete(review);
    const restaurantId = this.props.match.params.restaurantId;
    this.props.getRestaurant(restaurantId);
  }

  render() {
    const restaurant = this.props.selectedRestaurant || {};
    const reviews = restaurant.Reviews || [];
    console.log(restaurant);

    return (
      <div>
        <div className="restaurant-container">
          <RestaurantCard restaurant={restaurant} />

          {reviews.map((review) => {
            return <ReviewCard review={review} key={review.id} />;
          })}
          <div>
            <AddReview restaurant={this.props.selectedRestaurant} />
          </div>
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
    onDelete: (reviewId) => dispatch(fetchDeleteReview(reviewId)),
  };
};

export default connect(mapState, mapDispatch)(SingleRestaurant);
