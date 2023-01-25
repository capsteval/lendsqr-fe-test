/** @format */

import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, text }: { children: ReactNode; text?: string }) => {
  return (
    <div className="layoutContainer">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <main>
          <div>
            <h2 className="title">{text}</h2>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
