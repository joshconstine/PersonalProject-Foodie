import React from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../../store/reviews";
import { Link } from "react-router-dom";

export class UsersReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      this.props.getReviews(this.props.userId);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    // const restaurant = this.props.selectedRestaurant || {};
    // const reviews = restaurant.Reviews || [];
    // console.log(restaurant);

    return (
      <div>
        <h1>persons reviews</h1>
        <div>
          <h1>{this.props.username}</h1>
        </div>
        <h1>Reviews- </h1>
        {this.props.reviews.map((review) => {
          return (
            <div review={review} key={review.id}>
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    reviews: state.reviews,
    userId: state.auth.id,
    username: state.auth.username,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getReviews: (id) => dispatch(fetchReviews(id)),
  };
};

export default connect(mapState, mapDispatch)(UsersReviews);
