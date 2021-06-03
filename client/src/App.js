import React from "react";
import Layout from "./components/Layout/Layout";
import Head from "./components/Head/Head";
import "./App.css";

function App() {
  return (
    <Layout>
      <Head title={title}></Head>
    </Layout>
  );
}

export default App;
