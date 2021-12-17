import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Main from '../components/Main';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Main />
  </Layout>
)

export default IndexPage
