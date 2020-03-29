import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Video from "../components/Video";
import SEO from "../components/seo";
import LeaderBoard from '../components/LeaderBoard';

const IndexPage = () => (
  <Layout>
    <Video />
    <div style={{ height: '30px' }} />
    <LeaderBoard />
    <div style={{ height: '50px' }} />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
