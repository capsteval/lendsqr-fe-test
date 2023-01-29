/** @format */

import React, { useEffect, useMemo, useState } from "react";
import CardList from "../../components/CardList";
import Layout from "../../components/Layout";
import { listUser } from "../../services/api/apiData";
import { UserDetails } from "../../types";
import { Column, TableInstance, TableOptions, useTable } from "react-table";
import Table from "../../components/Table";
import { COLUMNS, random_item } from "../../services/UI/table/columns";
const Users = () => {
  const [userList, setUserList] = useState<UserDetails[]>([]);

  let userData: UserDetails[] = [];
  const initUserList = async () => {
    userData = await listUser({});

    setUserList(
      userData.map((user) => {
        return { ...user, accountNumber: random_item(["Inactive", "Active", "Blacklisted", "Pending"]) };
      })
    );
  };
  useEffect(() => {
    initUserList();
  }, []);

  return (
    <Layout text="Users">
      <CardList />
      <div style={{ marginTop: "40px" }}>
        <Table tableColumns={COLUMNS} userList={userList} />
      </div>
    </Layout>
  );
};

export default Users;
