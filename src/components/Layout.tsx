/** @format */

import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, text }: { children: ReactNode; text?: string }) => {
  return (
    <div className="layoutContainer">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <main>
          <MainContainer>
            <div>
              <h2 className="title">{text}</h2>
            </div>
            {children}
          </MainContainer>
        </main>
      </div>
    </div>
  );
};
const MainContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
  h2 {
    margin-bottom: 20px;
  }
`;
export default Layout;
