import React from "react";
import { Link } from "react-router-dom";

export default function OptionsBar() {
  return (
    <div>
      <nav>
        <Link to="/restaurants">Restaurants</Link>

        <a> My Reviews </a>
      </nav>
    </div>
  );
}
