import axios from "axios";

const initialState = [];

const CREATE_REVIEW = "CREATE_REVIEW";
const SET_REVIEWS = "SET_REVIEWS";
const DELETE_REVIEW = "DELETE_REVIEW";

const setReviews = (reviews) => {
  return {
    type: SET_REVIEWS,
    reviews,
  };
};

const createReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review,
  };
};
const deleteReview = (review) => {
  return {
    type: DELETE_REVIEW,
    review,
  };
};

export const fetchCreateReview = (review, restaurantId) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post(
        `/api/reviews/${restaurantId}`,
        review
      );

      dispatch(createReview(created));
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchDeleteReview = (review) => {
  return async (dispatch) => {
    const { data: created } = await axios.delete(`/api/reviews/${review}`);
    dispatch(deleteReview(created));
  };
};

export const fetchReviews = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/reviews/${id}`);
      dispatch(setReviews(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function reviewsReducer(reviews = initialState, action) {
  switch (action.type) {
    case CREATE_REVIEW:
      return [...reviews, action.review];
    case SET_REVIEWS:
      return action.reviews;
    case DELETE_REVIEW:
      return reviews.filter((review) => review.id !== action.review.id);
    default:
      return reviews;
  }
}
