/** @format */

import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, text }: { children: ReactNode; text?: string }) => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
        }}>
        <Sidebar />
        <div>
          <div>
            <h1>{text}</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
