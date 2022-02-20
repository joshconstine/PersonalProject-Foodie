import React from "react";
import { connect } from "react-redux";
// import { fetchRobots, fetchDeleteRobot } from "../redux/robots";
import { Link } from "react-router-dom";

var restaurants = [
  {
    id: 1,
    name: "Mac Shack ",
    imageUrl: "/images/r2d2.png",
    foodType: "american",
  },
  {
    id: 2,
    name: "Taco Bell",
    imageUrl: "/images/walle.jpeg",
    foodType: "mexican",
  },
  {
    id: 3,
    name: "Culvers",
    imageUrl: "/images/walle.jpeg",
    foodType: "american",
  },
];
export class AllRestautants extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // try {
    //   this.props.getRobots();
    // } catch (error) {
    //   console.error(error);
    // }
  }

  render() {
    const restaurants2 = restaurants;

    return (
      <div>
        <h1>hello guys</h1>
        {restaurants2.map((restaurant) => {
          return (
            <div restaurant={restaurant} key={restaurant.id}>
              <p>{restaurant.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapState = (state) => {};

const mapDispatch = (dispatch) => {};

export default connect(mapState, mapDispatch)(AllRestautants);
