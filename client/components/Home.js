import React from "react";
import { useSelector } from "react-redux";
import OptionsBar from "./OptionsBar";

/**
 * COMPONENT
 */
export const Home = () => {
  const username = useSelector((state) => state.auth.firstName);

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
// const mapState = (state) => {
//   return {
//     username: state.auth.username,
//   };
// };

// export default connect(mapState)(Home);
export default Home;
