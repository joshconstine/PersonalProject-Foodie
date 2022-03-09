import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateReview } from "../../store/reviews";
import { fetchRestaurant } from "../../store/singleRestaurant";
import { Button } from "@material-ui/core";

const AddReview = (props) => {
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  function handleChange(evt) {
    setText(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const name = username;
    const restaurantId = props.restaurant.id;
    await dispatch(fetchCreateReview({ text, name }, restaurantId));
    dispatch(fetchRestaurant(restaurantId));

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

export default AddReview;
