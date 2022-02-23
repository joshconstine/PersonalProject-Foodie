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
            className="mdc-card mdc-card--outlined restaurant"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          >
            <CardMedia>
              <CardMedia
                style={{ paddingTop: "100%" }}
                image={this.props.item.imageUrl}
                title="Background image"
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h3" className="restaurant-text">
                {this.props.item.label}
                
              </Typography>
            </CardContent>
            <CardActions>
              <Button>favorite</Button>
            </CardActions>
          </Card>
        </Box>
        ;<h1>singleitem</h1>
      </div>
    );
  }
}

export default SingleItem;
