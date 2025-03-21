import React from "react";

import Header from "../Header/Header";  // Поправен път
import Routers from "../../router/Routers";  // Поправен път
import Footer from "../Footer/Footer";  // Поправен път

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
