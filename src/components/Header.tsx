/** @format */

import React from "react";
import BellNotification from "../iconsJSX/notification";
import { RiArrowDropDownFill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <div className="searchInput">
          <input type="text" placeholder="search for anything" />
          <div className="searchIcon">
            <img src="./images/search.png" alt="" />
          </div>
        </div>
        <div className="profileSection">
          <p className="docs">Docs</p>
          <div>
            <BellNotification />
          </div>
          <div className="profile">
            <div className="icon">
              <img src="./images/profile-image.png" alt="" />
            </div>
            <p>Adedeji</p>
            <span>
              <RiArrowDropDownFill />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
