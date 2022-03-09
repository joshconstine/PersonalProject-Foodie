import axios from "axios";

const initialState = {};

const SET_RESTAURANT = "SET_RESTAURANT";

export const setRestaurant = (restaurant) => {
  return {
    type: SET_RESTAURANT,
    restaurant,
  };
};

export const fetchRestaurant = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/restaurants/${id}`);
      await dispatch(setRestaurant(data));
    } catch (err) {
      console.log(err);
    }
  };
};
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function restaurantReducer(restaurant = initialState, action) {
  switch (action.type) {
    case SET_RESTAURANT:
      return action.restaurant;

    default:
      return restaurant;
  }
}
