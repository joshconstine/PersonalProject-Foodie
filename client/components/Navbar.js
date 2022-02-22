import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import DropDownMenu from "./DropDownMenu";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>Foodie</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <span className="navItem">
            <Link to="/home">Home</Link>
          </span>
          <a className="navItem">
            <span href="#" onClick={handleClick}>
              Logout
            </span>
          </a>
          <a className="navItem">hello</a>
          <DropDownMenu />
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
