import Footer from "components/Footer";
import NewsLetter from "components/NewsLetter/NewsLetter";
import Navbar from "components/navbar/Navbar";
import React from "react";

const Layout = ({ children, isHome }) => {
  return (
    <>
      <Navbar isHome={isHome} />
      {children}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Layout;
