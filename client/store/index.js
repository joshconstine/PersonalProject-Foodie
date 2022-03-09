import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import restaurantsReducer from "./restaurants";
import restaurantReducer from "./singleRestaurant";
import reviewsReducer from "./reviews";
import { configureStore } from "@reduxjs/toolkit";

// const reducer = combineReducers({
//   auth,
//   restaurants: restaurantsReducer,
//   selectedRestaurant: restaurantReducer,
//   reviews: reviewsReducer,
// });

// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
// );
const middlewares = [ thunkMiddleware];

// const store = createStore(reducer, middleware);
const store = configureStore({
  reducer: {
    auth,
    restaurants: restaurantsReducer,
    selectedRestaurant: restaurantReducer,
    reviews: reviewsReducer,
  },
  middlewares,
});

export default store;
export * from "./auth";
