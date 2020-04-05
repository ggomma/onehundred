import React from "react";

import Layout from "../components/layout";
import Video from "../components/Video";
import SEO from "../components/seo";
import LeaderBoard from '../components/LeaderBoard';
import Date from '../components/Date';
import Submit from '../components/Submit';

const IndexPage = () => (
  <Layout>
    <Date />
    <Video />
    <div style={{ height: '30px' }} />
    <LeaderBoard />
    <div style={{ height: '50px' }} />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Submit />
    </div>
    <div style={{ height: '50px' }} />
    <SEO title="Home" />
    <div style={{ height: '50px' }} />
  </Layout>
)

export default IndexPage
