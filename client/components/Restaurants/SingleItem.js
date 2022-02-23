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

class SingleItem extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log("ing single item " + this.props.item);
    console.log(this.props.item);
  }
  state = {};
  render() {
    return (
      <div>
        <Box>
          <Card
            className=" singleFoodItem"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          >
            <CardMedia>
              <CardMedia
                // style={{ paddingTop: "100%" }}
                image={this.props.item.imageUrl}
                title="Background image"
                component="img"
                alt=""
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h3" className="restaurant-text">
                {this.props.item.label}
              </Typography>
              <Typography variant="h4" className="restaurant-text">
                calories: {this.props.item.calories}
              </Typography>
              <Typography variant="h4" className="restaurant-text">
                price: {this.props.item.price}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
    );
  }
}

export default SingleItem;
