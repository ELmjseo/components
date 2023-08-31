import React from "react";
import Header from "./Header";

interface I_layoutProps {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode;
}

const Layout = ({ children }: I_layoutProps) => {
  return (
    <>
      <Header />
      <div className="content-page">{children}</div>
    </>
  );
};

export default Layout;
