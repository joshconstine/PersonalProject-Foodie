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
import { fetchDeleteReview } from "../../store/reviews";

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
  async handleDelete(review) {
    await this.props.onDelete(review);
  }

  render() {
    const reviews = this.props.reviews || [];
    console.log(reviews);

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
        <div className="review">
          <h2>your reviews - </h2>
        </div>
        {reviews.map((review) => {
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
                    <Button onClick={() => this.handleDelete(review.id)}>
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
    onDelete: (reviewId) => dispatch(fetchDeleteReview(reviewId)),
  };
};

export default connect(mapState, mapDispatch)(UsersReviews);
