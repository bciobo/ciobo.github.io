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
import Footer from "./footer";
// import "./layout.css";


const Layout: React.FC = ({children}) => {
  const {title, email, twitter, linkedin} = useSiteMetadata()

  return (
    <div className={'bg-grey-cultured text-grey-independence'}>
      <Header siteTitle={title}/>
      <div
        className={'h-screen bg-grey-cultured'}
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer email={email} twitter={twitter} linkedin={linkedin}/>
    </div>
  );
};

export default Layout;
