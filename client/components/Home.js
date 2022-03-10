import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OptionsBar from "./OptionsBar";
import { fetchCityRestaurants } from "../store/restaurants";

/**
 * COMPONENT
 */
export const Home = () => {
  const username = useSelector((state) => state.auth.firstName);
  const dispatch = useDispatch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const cityName = evt.target.city.value;
    const stateName = evt.target.state.value;
    await dispatch(fetchCityRestaurants(cityName, stateName.toLowerCase()));

    console.log(cityName, stateName);
  };

  return (
    <div>
      <OptionsBar />
      <h3>Welcome, {username}</h3>
      <h1>where would you like to search?</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="city">
              <small>city</small>
            </label>
            <input name="city" type="text" />
          </div>
          <div>
            <label htmlFor="state">
              <small>state</small>
            </label>
            <input name="state" type="state" />
          </div>
          <div>
            <button type="submit">search!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     username: state.auth.username,
//   };
// };

// export default connect(mapState)(Home);
export default Home;
