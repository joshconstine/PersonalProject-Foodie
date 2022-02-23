import React from "react";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <div className="mui-dropdown">
      <button data-mui-toggle="dropdown" id="ddm">
        My Account
        <span className="mui-caret"></span>
      </button>
      <ul className="mui-dropdown__menu" id="ddm">
        <Link to="/reviews">
          <li>
            <span>Your reviews</span>
          </li>
        </Link>
        <Link to="/home">
          <li>
            <span>Home</span>
          </li>
        </Link>
        <Link to="/Map">
          <li>
            <span>Map</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DropDownMenu;
