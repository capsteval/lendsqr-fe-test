/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiArrowDropDownFill } from "react-icons/ri";
import OrganiseBox from "../iconsJSX/OrganiseBox";
const routes = [
  {
    parent: "CUSTOMERS",
    childLinks: [
      {
        title: "Users",
        to: "/admin/users",
        icon: "",
      },
      {
        title: "Guarantors",
        to: "/admin/guarantors",
        icon: "",
      },
      {
        title: "Loans",
        to: "/admin/loans",
        icon: "",
      },
      {
        title: "Decision Models",
        to: "/admin/decicions",
        icon: "",
      },
      {
        title: "Savings",
        to: "/admin/savings",
        icon: "",
      },
      {
        title: "Loan Requests",
        to: "/admin/loanRequest",
        icon: "",
      },
      {
        title: "Whitelist",
        to: "/admin/whitelist",
        icon: "",
      },
      {
        title: "Karma",
        to: "/admin/karma",
        icon: "",
      },
    ],
  },
  {
    parent: "BUSINESSES",
    childLinks: [
      {
        title: "Organization",
        to: "/admin/organization",
        icon: "",
      },
      {
        title: "Loan Products",
        to: "/admin/loan-product",
        icon: "",
      },
      {
        title: "Savings Products",
        to: "/admin/savings-product",
        icon: "",
      },
      {
        title: "Users",
        to: "/admin/users",
        icon: "",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sidebarWrap">
      <div className="container">
        <div className="singleNavListItem navList active">
          <OrganiseBox />
          Switch Organization <RiArrowDropDownFill />
        </div>
        <NavLink className="navList dashboard" to="/admin">
          Dashboard
        </NavLink>
        {routes.map((p) => {
          let childLinks = p.childLinks.map((c) => {
            return (
              <li>
                <NavLink
                  className="navList"
                  style={{
                    display: "block",
                  }}
                  to={c.to}>
                  {c.title}
                </NavLink>
              </li>
            );
          });
          return (
            <>
              <h5>{p.parent}</h5>
              <ul className="navSection">{childLinks}</ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
