/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IconDashboard, IconDecisionModels, IconFeesCharges, IconFeesPricing, IconGuarantors, IconKarma, IconLoan, IconLoanProduct, IconLoanRequest, IconOrganisation, IconOrganiseBox, IconPreference, IconReports, IconSavingProduct, IconSavings, IconServiceAccount, IconServices, IconSettlement, IconTransaction, IconUserSvg, IconWhiteList } from "../iconsJSX/";
import IconAuditLog from "../iconsJSX/IconAuditLog";
const routes = [
  {
    parent: "CUSTOMERS",
    childLinks: [
      {
        title: "Users",
        to: "/dashboard/users/details",
        icon: <IconUserSvg />,
      },
      {
        title: "Guarantors",
        to: "/dashboard/guarantors",
        icon: <IconGuarantors />,
      },
      {
        title: "Loans",
        to: "/dashboard/loans",
        icon: <IconLoan />,
      },
      {
        title: "Decision Models",
        to: "/dashboard/decicions",
        icon: <IconDecisionModels />,
      },
      {
        title: "Savings",
        to: "/dashboard/savings",
        icon: <IconSavings />,
      },
      {
        title: "Loan Requests",
        to: "/dashboard/loanRequest",
        icon: <IconLoanRequest />,
      },
      {
        title: "Whitelist",
        to: "/dashboard/whitelist",
        icon: <IconWhiteList />,
      },
      {
        title: "Karma",
        to: "/dashboard/karma",
        icon: <IconKarma />,
      },
    ],
  },
  {
    parent: "BUSINESSES",
    childLinks: [
      {
        title: "Organization",
        to: "/dashboard/organization",
        icon: <IconOrganisation />,
      },
      {
        title: "Loan Products",
        to: "/dashboard/loan-product",
        icon: <IconLoanProduct />,
      },
      {
        title: "Savings Products",
        to: "/dashboard/savings-product",
        icon: <IconSavingProduct />,
      },
      {
        title: "Fees and Charges",
        to: "/dashboard/fee-charges",
        icon: <IconFeesCharges />,
      },
      {
        title: "Transactions",
        to: "/dashboard/transaction",
        icon: <IconTransaction />,
      },
      {
        title: "Services",
        to: "/dashboard/services",
        icon: <IconServices />,
      },
      {
        title: "Service Account",
        to: "/dashboard/service-account",
        icon: <IconServiceAccount />,
      },
      {
        title: "Settlements",
        to: "/dashboard/settlement",
        icon: <IconSettlement />,
      },
      {
        title: "Reports",
        to: "/dashboard/report",
        icon: <IconReports />,
      },
    ],
  },
  {
    parent: "SETTINGS",
    childLinks: [
      {
        title: "Preferences",
        to: "/dashboard/preferences",
        icon: <IconPreference />,
      },
      {
        title: "Fees and Pricing",
        to: "/dashboard/fee-pricing",
        icon: <IconFeesPricing />,
      },
      {
        title: "Audit Logs",
        to: "/dashboard/audit-logs",
        icon: <IconAuditLog />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sidebarWrap">
      <div className="container">
        <div className="singleNavListItem navList active">
          <IconOrganiseBox />
          Switch Organization <RiArrowDropDownFill />
        </div>
        <NavLink className="navList dashboard" to="/dashboard">
          <IconDashboard />
          Dashboard
        </NavLink>
        {routes.map((p, i) => {
          let childLinks = p.childLinks.map((c, n) => {
            return (
              <li key={n}>
                <NavLink className="navList" to={c.to}>
                  {c.icon}
                  {c.title}
                </NavLink>
              </li>
            );
          });
          return (
            <div key={i}>
              <h5>{p.parent}</h5>
              <ul className="navSection">{childLinks}</ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
