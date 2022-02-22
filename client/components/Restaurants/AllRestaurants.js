import React from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "../../store/restaurants";
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
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export class AllRestautants extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      this.props.getRestaurants();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const restaurants = this.props.restaurants || [];

    return (
      <div>
        <div id="headder">
          <h1>Restaurants near you...</h1>
        </div>
        <div className="restaurant-container">
          {restaurants.map((restaurant) => {
            return (
              <div restaurant={restaurant} key={restaurant.id}>
                <Box>
                  <Card
                    className="mdc-card mdc-card--outlined restaurant"
                    variant="outlined"
                    style={{ backgroundColor: "white" }}
                  >
                    <CardMedia>
                      <CardMedia
                        style={{ paddingTop: "100%" }}
                        image={restaurant.imageUrl}
                        title="Background image"
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

              // <div
              //   restaurant={restaurant}
              //   key={restaurant.id}
              //   className="mdc-card mdc-card--outlined"
              // >
              //   <Link to={`/restaurants/${restaurant.id}`}>
              //     <p>{restaurant.name}</p>
              //   </Link>
              // </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    restaurants: state.restaurants,
    selectedRestaurant: state.selectedRestaurant,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRestaurants: () => dispatch(fetchRestaurants()),
  };
};

export default connect(mapState, mapDispatch)(AllRestautants);
