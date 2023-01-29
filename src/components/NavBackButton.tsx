/** @format */

import React from "react";
import styled from "styled-components";
import { IconNavBack } from "../iconsJSX";

const NavBackButton = ({ previousPage }: { previousPage: string }) => {
  return (
    <StyleNavBackButton>
      <IconNavBack /> back to {previousPage}
    </StyleNavBackButton>
  );
};

const StyleNavBackButton = styled.section`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #545f7d;
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 26px;
`;

export default NavBackButton;
