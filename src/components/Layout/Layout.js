import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import layoutStyles from "./Layout.module.scss";

const Layout = (props) => {
  const backgroundColor = props.backgroundColor || "#333333";

  return (
    <div className={layoutStyles.container}>
      <Header className={layoutStyles.header} />
      <div className={layoutStyles.body} style={{ backgroundColor }}>
        {props.children}
      </div>
      <Footer className={layoutStyles.footer} />
    </div>
  );
};

export default Layout;
