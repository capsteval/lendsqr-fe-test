/** @format */

import { CellProps, Column, Renderer } from "react-table";
import { UserDetails } from "../../../types";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { IconMore } from "../../../iconsJSX";
import { ReactNode } from "react";

/** @format */
export type ColumnType = {
  Header: string;
  accessor: string;
};
export const COLUMNS: Column[] = [
  {
    Header: "ORGANIZATION",
    accessor: "orgName",
  },
  {
    Header: "USERNAME",
    accessor: "userName",
  },
  {
    Header: "EMAIL",
    accessor: "email",
  },
  {
    Header: "PHONE NUMBER",
    accessor: "phoneNumber",
  },
  {
    Header: "DATE JOINED",
    accessor: "createdAt",
    Cell: ({ value }): any => {
      return format(new Date(value), "MMM dd yyyy hh:mm aaa");
    },
  },
  {
    Header: "STATUS",
    accessor: "accountNumber",
  },
];
export function random_item(items: string[]) {
  return items[Math.floor(Math.random() * items.length)];
}
