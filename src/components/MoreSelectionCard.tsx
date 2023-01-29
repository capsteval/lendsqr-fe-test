/** @format */

import React from "react";
import styled from "styled-components";
import { IconActivateUser, IconBlackListUser, IconViewDetails } from "../iconsJSX";

const MoreSelectionCard = () => {
  return (
    <CardWrapper>
      <ul>
        <li>
          <IconViewDetails /> View Details
        </li>
        <li>
          <IconBlackListUser />
          Blacklist User
        </li>
        <li>
          <IconActivateUser />
          Activate User
        </li>
      </ul>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(84, 95, 125, 0.04);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  max-width: 180px;
  position: absolute;
  top: 45px;
  left: -90px;
  z-index: 22;

  ul {
    padding: 10px 0px;
    li {
      list-style: none;
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      padding: 10px 40px 10px 20px;
      color: #545f7d;
      display: flex;
      gap: 10px;
      white-space: nowrap;

      &:hover {
        background: #545f7d14;
      }
    }
  }
`;

export default MoreSelectionCard;
