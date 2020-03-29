import React from "react";

import Layout from "../components/layout";
import Video from "../components/Video";
import SEO from "../components/seo";
import LeaderBoard from '../components/LeaderBoard';
import Date from '../components/Date';

const IndexPage = () => (
  <Layout>
    <Date />
    <Video />
    <div style={{ height: '30px' }} />
    <LeaderBoard />
    <div style={{ height: '50px' }} />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
