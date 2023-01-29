/** @format */

import React, { useMemo, useState } from "react";
import { Column, Row, TableInstance, usePagination, UsePaginationInstanceProps, UsePaginationState, useRowSelect, useSortBy, UseSortByInstanceProps, useTable } from "react-table";
import styled from "styled-components";
import { IconFilterIcon, IconMore } from "../iconsJSX";
import { UserDetails } from "../types";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import MoreSelectionCard from "./MoreSelectionCard";
export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };
const Table = ({ tableColumns, userList }: { tableColumns: Column[]; userList: UserDetails[] }) => {
  const columns = useMemo<Column[]>(() => tableColumns, []);

  const [showMoreCard, setShowMoreCard] = useState(-1);

  const data = useMemo(() => userList, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, nextPage, previousPage, setPageSize, canNextPage, canPreviousPage, pageOptions, state, page, gotoPage, pageCount, prepareRow, selectedFlatRows } = useTable(
    {
      columns,
      data: userList,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          ...columns,
          {
            Header: " ",
            accessor: "id",
            Cell: ({ row }) => (
              <button onClick={() => handleMoreClick(row)} className="moreButton" key={row.id}>
                <IconMore />
                {showMoreCard === row.index && <MoreSelectionCard />}
              </button>
            ),
          },
        ];
      });
    }
  );
  function handleMoreClick(row: Row) {
    setShowMoreCard((oldState) => {
      if (oldState == row.index) return -1;
      return row.index;
    });
    console.log(row);
  }
  const { pageIndex, pageSize } = state;
  return (
    <TableWrap>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th {...column.getHeaderProps()} key={index}>
                  {/* <th {...column.getHeaderProps(column.getSortByToggleProps())} key={index}> */}
                  <div>
                    {column.render("Header")}
                    {/* <span>{column.isSorted ? (column.isSortedDesc ? "d" : "u") : ""}</span> */}
                    {index < 6 && (
                      <span>
                        <IconFilterIcon />
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td {...cell.getCellProps()} key={index}>
                      <div className={index == 5 ? `${cell.row.cells[5].value} status` : ""}>{cell.render("Cell")}</div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="tableFooter">
        <div className="tableInfo">
          <span>showing</span>
          <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span>Out of {rows?.length}</span>
        </div>
        <div className="tablePagination">
          <button className="pageArrowBtn" onClick={() => previousPage()} disabled={!canPreviousPage}>
            <MdKeyboardArrowLeft />
          </button>
          {Array.from(Array(pageOptions.length).keys()).map((page) => {
            return (
              <button key={page} className={pageIndex === page ? "active page" : "page"} onClick={() => gotoPage(page)}>
                {page + 1}
              </button>
            );
          })}
          <button className="pageArrowBtn" onClick={() => nextPage()} disabled={!canNextPage}>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </TableWrap>
  );
};

const TableWrap = styled.div`
  table {
    background: #ffffff;
    border: 1px solid rgba(33, 63, 125, 0.06);
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    th {
      text-align: left;
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      horizontal-align: middle;
      padding: 30px 5px 25px;
      color: #545f7d;
      div {
        display: flex;
        align-items: start;
        gap: 10px;
      }
    }
    td {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #545f7d;
      padding: 21px 5px;
      border-bottom: 1px solid rgba(33, 63, 125, 0.1);
      &:last-of-type {
        border-bottom: none;
      }
      .status {
        border-radius: 100px;
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        padding: 7px 10px;
        display: flex;
        place-content: center;

        &.Inactive {
          background: #545f7d14;
          color: #545f7d;
        }
        &.Active {
          color: #39cd62;
          background: #39cd6208;
        }
        &.Pending {
          color: #e9b200;
          background: #e9b2001e;
        }
        &.Blacklisted {
          color: #e4033b;
          background: #e4033b1e;
        }
      }
    }
    th:last-of-type,
    td:last-of-type {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  .tableFooter {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 10px 0px 30px;
    .tableInfo {
      display: flex;
      gap: 10px;
      align-items: center;
      span {
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        color: #545f7d;
      }
      select {
        background: rgba(33, 63, 125, 0.1);
        border-radius: 4px;
        padding: 7px 14px;
        outline: none;
        border: none;
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;

        color: #213f7d;
      }
    }
  }
  .tablePagination {
    display: flex;
    align-items: center;
    button {
      outline: none;
      border: none;
      padding: 2px 8px;
      background-color: transparent;
      cursor: pointer;

      &.page {
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #545f7d6e;

        &.active {
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: #545f7d;
        }
      }
    }
    .pageArrowBtn {
      background: rgba(33, 63, 125, 0.1);
      border-radius: 4px;
      color: #213f7d;
      padding: 0;
      padding: 1px;
      font-size: 20px;
      display: flex;
      align-items: center;
      width: 24px;
      height: 24px;
      &:disabled {
        color: #213f7d2e;
      }
    }
  }
  .moreButton {
    padding: 2px 8px;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    position: relative;
  }
`;

export default Table;
