import React, { useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { fetchRestaurant } from "../../store/singleRestaurant";
import AddReview from "./AddReview";

import ReviewCard from "../Reviews/ReviewCard";
import RestaurantCard from "./RestaurantCard";

export const SingleRestaurant = (props) => {
  const selectedRestaurant = useSelector((state) => state.selectedRestaurant);
  const reviews = useSelector((state) => state.selectedRestaurant.Reviews);

  const restaurantId = props.match.params.restaurantId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurant(restaurantId));
  }, []);
  
  const allReviews = reviews || [];
  return (
    <div>
      <div className="restaurant-container">
        <RestaurantCard restaurant={selectedRestaurant} />

        {allReviews.map((review) => {
          return <ReviewCard review={review} key={review.id} />;
        })}
        <div>
          <AddReview restaurant={selectedRestaurant} />
        </div>
      </div>
    </div>
  );
};
export default SingleRestaurant;
