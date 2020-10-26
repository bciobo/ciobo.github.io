// If you don't want to use TypeScript you can delete this file!
import React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Layout from "../components/layout";

type DataProps = {
  site: {
    buildTime: string;
  };
};

const Index: React.FC<PageProps<DataProps>> = ({data, path}) => (
  <Layout>
    <h2 className={'my-2'}>Gatsby supports TypeScript by default!</h2>
    <p className={'tx-blue-powder'}>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don't support TypeScript yet.
    </p>
    <p>
      For type checking you'll want to install <em>typescript</em> via npm and
      run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
    </p>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.org/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/page-2/">
      <button className={'bg-blue-morning hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>Go to page 2
      </button>
    </Link>
    <Link to="/page-3/">
      <button className={'bg-blue-powder hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>Go to page 3
      </button>
    </Link>
  </Layout>
);

export default Index;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
