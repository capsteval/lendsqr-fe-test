/** @format */

import React from "react";
import { IconBellNotification } from "../iconsJSX";
import { RiArrowDropDownFill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="lendsqr" />
        </div>
        <div className="searchInput">
          <input type="text" placeholder="search for anything" />
          <div className="searchIcon">
            <img src={process.env.PUBLIC_URL + "/images/search.png"} alt="Go" />
          </div>
        </div>
        <div className="profileSection">
          <p className="docs">Docs</p>
          <div>
            <IconBellNotification />
          </div>
          <div className="profile">
            <div className="icon">
              <img src={process.env.PUBLIC_URL + "/images/profile-image.png"} alt="you" />
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
