import auth from "./auth";
import restaurantsReducer from "./restaurants";
import restaurantReducer from "./singleRestaurant";
import reviewsReducer from "./reviews";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth,
    restaurants: restaurantsReducer,
    selectedRestaurant: restaurantReducer,
    reviews: reviewsReducer,
  },
});

export default store;
export * from "./auth";
