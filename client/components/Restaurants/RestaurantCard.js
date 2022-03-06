import React, { Component } from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { restaurant } = props;

  return (
    <div>
      <Box>
        <Card
          className="mdc-card mdc-card--outlined restaurant"
          variant="outlined"
          style={{ backgroundColor: "white" }}
        >
          <CardMedia>
            <CardMedia
              style={{ paddingTop: "5%" }}
              image={restaurant.imageUrl}
              title="Background image"
              component="img"
            />
          </CardMedia>
          <CardContent>
            <Link to={`/restaurants/${restaurant.id}`}>
              <Typography variant="h3" className="restaurant-text">
                {restaurant.name}
              </Typography>
            </Link>
          </CardContent>
          <CardActions>
            <Button>favorite</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default RestaurantCard;
