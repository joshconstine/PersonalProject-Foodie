import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReviews } from "../../store/reviews";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core";
import { fetchDeleteReview } from "../../store/reviews";

export const UsersReviews = (props) => {
  const reviews = useSelector((state) => state.reviews);
  const userId = useSelector((state) => state.auth.id);
  const username = useSelector((state) => state.auth.username);
  const photo = useSelector((state) => state.auth.photo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews(userId));
  }, []);

  async function handleDelete(review) {
    await dispatch(fetchDeleteReview(review));
  }

  const allReviews = reviews || [];

  return (
    <div className="restaurant-container">
      <Box>
        <Card
          className="mdc-card mdc-card--outlined restaurant"
          variant="outlined"
          style={{ backgroundColor: "white" }}
        >
          <CardMedia>
            <CardMedia
              style={{ paddingTop: "100%" }}
              image={photo}
              title="Background image"
            />
          </CardMedia>
          <CardContent>
            <Typography variant="h3" className="restaurant-text">
              {username}
            </Typography>
          </CardContent>
          <CardActions>
            <Button>favorite</Button>
          </CardActions>
        </Card>
      </Box>
      <div className="review">
        <h2>your reviews - </h2>
      </div>
      {allReviews.map((review) => {
        return (
          <div review={review} key={review.id} className="review">
            <Box>
              <Card
                className="mdc-card mdc-card--outlined"
                variant="outlined"
                style={{
                  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                  "&:hover": {
                    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h3" className="restaurant-text">
                    <div>
                      <h3>{review.Restaurant.name}</h3>
                      <p>{review.text}</p>
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => handleDelete(review.id)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </div>
        );
      })}
    </div>
  );
};

export default UsersReviews;
