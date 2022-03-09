import React, {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateReview } from "../../store/reviews";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../store/singleRestaurant";
import { Button } from "@material-ui/core";

const AddReview = (props) => {
  const [text, setText] = useState("");
  const { restaurant, createReview } = props;

  function handleChange(evt) {
    setText(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const name = props.username;
    const restaurantId = props.restaurant.id;
    createReview({ text, name }, restaurantId);
    props.getRestaurant(restaurantId);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="text"
        className="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--no-label"
      >
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

      <Button variant="text" type="submit">
        Submit
      </Button>
    </form>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};
const mapDispatchToProps = (dispatch, { history }) => ({
  createReview: (review, restaurantId) =>
    dispatch(fetchCreateReview(review, restaurantId)),
  getRestaurant: (id) => dispatch(fetchRestaurant(id)),
});

export default connect(mapState, mapDispatchToProps)(AddReview);
