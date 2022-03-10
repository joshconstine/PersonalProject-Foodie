import axios from "axios";

const initialState = [];

// action type constants

const SET_RESTAURANTS = "SET_RESTAURANTS";
const CREATE_RESTAURANT = "CREATE_RESTAURANT";
const DELETE_RESTAURANT = "DELETE_RESTAURANT";

// action creators

export const createRestaurant = (restaurant) => {
  return {
    type: CREATE_RESTAURANT,
    restaurant,
  };
};

export const deleteRestaurant = (restaurant) => {
  return {
    type: DELETE_RESTAURANT,
    restaurant,
  };
};
export const setRestaurants = (restaurants) => {
  return {
    type: SET_RESTAURANTS,
    restaurants,
  };
};

// THUNK CREATORS

export const fetchRestaurants = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/restaurants");
      dispatch(setRestaurants(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCityRestaurants = (city, state) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/restaurants/${city}/${state}`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCreateRestaurant = (restaurant, history) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post(
        "/api/restaurants",
        restaurant
      );
      dispatch(createRestaurant(created));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchDeleteRestaurant = (restaurant, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.delete(
      `/api/restaurants/${restaurant}`
    );
    dispatch(deleteRestaurant(created));
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function restaurantsReducer(restaurants = initialState, action) {
  switch (action.type) {
    case SET_RESTAURANTS:
      return action.restaurants;
    case CREATE_RESTAURANT:
      return [...restaurants, action.restaurant];

    case DELETE_RESTAURANT:
      return restaurants.filter(
        (restaurant) => restaurant.id !== action.restaurant.id
      );

    default:
      return restaurants;
  }
}
