import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title, metaDescription }) => {
  return (
    <Helmet>
      <title>{`HackIDC`}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
};

export default Head;
