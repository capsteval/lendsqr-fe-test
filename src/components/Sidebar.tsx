/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
const routes = [
  {
    title: "Dashboard",
    to: "/admin",
  },
  {
    title: "Users",
    to: "/admin/users",
  },
];

const Sidebar = () => {
  return (
    <div>
      {routes.map((r) => {
        return (
          <NavLink
            style={{
              display: "block",
            }}
            to={r.to}>
            {r.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
