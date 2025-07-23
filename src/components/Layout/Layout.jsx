// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This displays the route-specific page */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
