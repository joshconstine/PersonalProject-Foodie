import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../../store/restaurants";
import RestaurantCard from "./RestaurantCard";

export const AllProducts = () => {
  const restaurants = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  return (
    <div>
      <div id="headder">
        <h1>Restaurants near you...</h1>
      </div>
      <div className="restaurant-container">
        {restaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
