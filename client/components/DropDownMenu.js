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
        <li>
          <span href="#">Option 2</span>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
