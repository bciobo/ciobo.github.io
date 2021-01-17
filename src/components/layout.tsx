/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import { useSiteMetadata } from "../hooks/use-site-metadata";
// import "./layout.css";


const Layout: React.FC = ({children}) => {
  const {title, siteUrl} = useSiteMetadata()

  return (
    <div className={'bg-grey-cultured text-grey-independence'}>
      <Header siteTitle={title}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
        className={'bg-grey-cultured'}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
