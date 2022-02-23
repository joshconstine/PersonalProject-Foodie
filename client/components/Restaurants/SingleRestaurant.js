import React from "react";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../store/singleRestaurant";
import AddReview from "./AddReview";
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

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class SingleRestaurant extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      const restaurantId = this.props.match.params.restaurantId;
      this.props.getRestaurant(restaurantId);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const restaurant = this.props.selectedRestaurant || {};
    const reviews = restaurant.Reviews || [];
    console.log(restaurant);

    return (
      <div>
        <div className="restaurant-container">
          <Box>
            <Card
              className="mdc-card mdc-card--outlined singleRestaurant"
              variant="outlined"
              style={{ backgroundColor: "white" }}
            >
              <CardMedia>
                <CardMedia
                  style={{ paddingTop: "10%" }}
                  image={restaurant.imageUrl}
                  title="Background image"
                  component="img"
                />
              </CardMedia>
              <CardContent>
                <Typography variant="h3" className="restaurant-text">
                  {restaurant.name}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </div>
        <h1>Reviews- </h1>
        {/* {reviews.map((review) => {
          return (
            <div review={review} key={review.id}>
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          );
        })} */}
        {reviews.map((review) => {
          return (
            <div review={review} key={review.id}>
              <Box>
                <Card
                  className="mdc-card mdc-card--outlined review"
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
                  <CardActions>
                    <Button>Delete</Button>
                  </CardActions>
                </Card>
              </Box>
            </div>
          );
        })}
        <div>
          <AddReview />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    selectedRestaurant: state.selectedRestaurant,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRestaurant: (id) => dispatch(fetchRestaurant(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleRestaurant);
