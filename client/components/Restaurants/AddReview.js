import React, { Component } from "react";
import { fetchCreateReview } from "../../store/reviews";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../store/singleRestaurant";
import { Button } from "@material-ui/core";
import { MDCTextField } from "@material/textfield";

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
        <label
          htmlFor="text"
          className="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--no-label"
        >
          <span className="mdc-notched-outline">
            <span className="mdc-notched-outline__leading"></span>
            <span className="mdc-notched-outline__trailing"></span>
          </span>
          <span className="mdc-text-field__resizer ">
            <textarea
              onChange={handleChange}
              value={text}
              name="text"
              className="mdc-text-field__input"
              rows="8"
              cols="40"
              aria-label="Label"
            ></textarea>
          </span>
        </label>

        {/* <label htmlFor="text">text:</label> */}
        {/* <input name="text" onChange={handleChange} value={text} /> */}
        <Button variant="text" type="submit">
          Submit
        </Button>

        {/* <button type="submit">Submit</button> */}
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
