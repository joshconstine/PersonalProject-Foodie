import React, { Component } from "react";
import { fetchCreateReview } from "../../store/reviews";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../store/singleRestaurant";

class AddReview extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const name = this.props.username;
    const restaurantId = this.props.selectedRestaurant.id;
    this.props.createReview({ ...this.state, name }, restaurantId);
    this.props.getRestaurant(restaurantId);
    this.setState({
      text: "",
    });
  }

  render() {
    const { text } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">text:</label>
        <input name="text" onChange={handleChange} value={text} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapState = (state) => {
  return {
    username: state.auth.username,
    selectedRestaurant: state.selectedRestaurant,
  };
};
const mapDispatchToProps = (dispatch, { history }) => ({
  createReview: (review, restaurantId) =>
    dispatch(fetchCreateReview(review, restaurantId)),
  getRestaurant: (id) => dispatch(fetchRestaurant(id)),
});

export default connect(mapState, mapDispatchToProps)(AddReview);
