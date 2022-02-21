import axios from "axios";

const initialState = [];

const CREATE_REVIEW = "CREATE_REVIEW";

const createReview = (review) => {
  return {
    type: CREATE_REVIEW,
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

export default function reviewsReducer(reviews = initialState, action) {
  switch (action.type) {
    case CREATE_REVIEW:
      return [...reviews, action.review];

    default:
      return reviews;
  }
}
