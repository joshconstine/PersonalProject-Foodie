import React from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../../store/reviews";
import { Link } from "react-router-dom";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core";

export class UsersReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      this.props.getReviews(this.props.userId);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const reviews = this.props.reviews || [];
    console.log(reviews);

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
                style={{ paddingTop: "100%" }}
                image={this.props.photo}
                title="Background image"
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h3" className="restaurant-text">
                {this.props.username}
              </Typography>
            </CardContent>
            <CardActions>
              <Button>favorite</Button>
            </CardActions>
          </Card>
        </Box>
        <h2>your reviews - </h2>
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
                        <h3>{review.Restaurant.name}</h3>
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
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    reviews: state.reviews,
    userId: state.auth.id,
    username: state.auth.username,
    photo: state.auth.photo,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getReviews: (id) => dispatch(fetchReviews(id)),
  };
};

export default connect(mapState, mapDispatch)(UsersReviews);
