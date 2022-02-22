import React from "react";

const DropDownMenu = () => {
  return (
    <div class="mui-dropdown">
      <button class="mui-btn mui-btn--primary" data-mui-toggle="dropdown">
        Dropdown
        <span class="mui-caret"></span>
      </button>
      <ul class="mui-dropdown__menu">
        <li>
          <a href="#">Option 1</a>
        </li>
        <li>
          <a href="#">Option 2</a>
        </li>
        <li>
          <a href="#">Option 3</a>
        </li>
        <li>
          <a href="#">Option 4</a>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
