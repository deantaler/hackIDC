import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import layoutSyles from "./Layout.module.scss";

const Layout = (props) => {
  const backgroundColor = props.backgroundColor || "#ffffff";

  return (
    <div className={layoutSyles.container}>
      <Header className={layoutSyles.header} />
      <div className={layoutSyles.body} style={{ backgroundColor }}>
        {props.children}
      </div>
      <Footer className={layoutSyles.footer} />
    </div>
  );
};

export default Layout;
