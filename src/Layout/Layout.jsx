import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import Tabs11 from "../components/header/Tabs";
// import Tabss from "../components/header/Tabs";

const Layout = () => {
  return (
    <>
      <Header />
      <Tabs11 />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
