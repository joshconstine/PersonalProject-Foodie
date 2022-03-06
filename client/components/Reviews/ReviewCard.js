import React from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core";

const ReviewCard = (props) => {
  const { review } = props;
  return (
    <div className="review">
      <Box>
        <Card
          className="mdc-card mdc-card--outlined"
          variant="outlined"
          style={{ backgroundColor: "white" }}
        >
          <CardContent>
            <Typography variant="h3" className="restaurant-text">
              <div>
                <h3>{review.name}</h3>
                <p>{review.text}</p>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ReviewCard;
