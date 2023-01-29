/** @format */

import React, { ReactNode } from "react";
import { CardInfo } from "../interfaces";
import { CardProps } from "../types/props";

const Card = (props: CardProps) => {
  return (
    //style in App.scss
    <div className="card">
      <span>{props.card.icon}</span>
      <p className="title">{props.card.title}</p>
      <p className="value">{props.card.value}</p>
    </div>
  );
};

export default Card;
