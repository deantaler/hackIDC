import React from "react";
import Layout from "./components/Layout/Layout";
import Head from "./components/Head/Head";
import "./styles/main.scss";
import "./styles/sass/mixins.scss";
// import ImageUploadForm from "./components/ImageUploadForm/ImageUploadForm";
function App() {
  return (
    <Layout>
      <Head title={"HackIDC"}></Head>
      {/* <ImageUploadForm /> */}
    </Layout>
  );
}

export default App;
