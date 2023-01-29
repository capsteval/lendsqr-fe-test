/** @format */

import React from "react";
import { CardProps } from "../types/props";
import Card from "./Card";
import styled from "styled-components";
import { IconActiveUsers, IconSavingUsers, IconUsers, IconUserWithLoans } from "../iconsJSX";

const cardInfoList = [
  {
    icon: <IconUsers />,
    title: "Users",
    value: "2,341",
  },
  {
    icon: <IconActiveUsers />,
    title: "Active Users",
    value: "2,341",
  },
  {
    icon: <IconUserWithLoans />,
    title: "Users with Loans",
    value: "12,453",
  },
  {
    icon: <IconSavingUsers />,
    title: "Users with Savings",
    value: "102,453",
  },
];
const CardList = () => {
  return (
    <Wrapper>
      {cardInfoList.map((cardInfo, index) => {
        return <Card card={cardInfo} key={index} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 26px;
`;

export default CardList;
