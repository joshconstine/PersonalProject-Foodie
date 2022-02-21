import React, { Component } from "react";
import { fetchCreateReview } from "../../store/reviews";
import { connect } from "react-redux";

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
    this.props.createReview({ ...this.state });
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

const mapDispatchToProps = (dispatch, { history }) => ({
  createReview: (review) => dispatch(fetchCreateReview(review, history)),
});

export default connect(null, mapDispatchToProps)(AddReview);
