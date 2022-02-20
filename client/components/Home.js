import React from "react";
import { connect } from "react-redux";
import OptionsBar from "./OptionsBar";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;
  return (
    <div>
      <OptionsBar />
      <h3>Welcome, {username}</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);