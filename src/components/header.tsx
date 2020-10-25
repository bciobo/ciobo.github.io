import { Link } from "gatsby";
import React from "react";

type HeaderProps = { siteTitle: string };

const Header: React.FC<HeaderProps> = ({siteTitle}) => (
  <header
    className={'bg-blue-morning'}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          className={'text-apricot'}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);


export default Header;
