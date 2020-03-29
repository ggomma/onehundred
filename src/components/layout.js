/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';

import Header from "./header";
import "./layout.css";


const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#ffffff',
  },
  footer: {
    paddingLeft: 5,
    maxWidth: 960,
    paddingTop: 15,
    margin: '0 auto',
  }
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="wrapper">
      <Header siteTitle="1Day 100Reps" />
      <div
        style={{
          margin: `0 auto`,
          marginTop: '20px',
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <div className={classes.footer}>
            © 2020, Developed by
            {` `}
            <a className={classes.link} href="https://github.com/ggomma">꼼마</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
