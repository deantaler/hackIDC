import React from "react"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head/Head"

const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="Page Not Found"></Head>
      <h1>Oops... seems like the page your'e looking for can't be found...</h1>
    </Layout>
  )
}

export default NotFoundPage
