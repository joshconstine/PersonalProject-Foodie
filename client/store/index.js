import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import restaurantsReducer from "./restaurants";
import restaurantReducer from "./singleRestaurant";
import reviewsReducer from "./reviews";

const reducer = combineReducers({
  auth,
  restaurants: restaurantsReducer,
  selectedRestaurant: restaurantReducer,
  reviews: reviewsReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
