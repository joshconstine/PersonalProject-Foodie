import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import DropDownMenu from "./DropDownMenu";
import { Button } from "@material-ui/core";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  async function handleLogout() {
    await dispatch(logout());
  }

  return (
    <div>
      <h1>Foodie</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <span className="navItem">
              <DropDownMenu />
            </span>

            <a className="navItem">
              <Button onClick={handleLogout}>Logout</Button>
            </a>
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
};

export default Navbar;
