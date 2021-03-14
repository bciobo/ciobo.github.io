import { Link } from "gatsby";
import React from "react";

type HeaderProps = { siteTitle: string };

const Header: React.FC<HeaderProps> = ({siteTitle}) => (
  <header
    className={'bg-blue-morning w-screen fixed'}
  >
    <div className={'w-auto flex content-center items-center'}>
      <h1 className={'text-3xl md:text-4xl lg:text-5xl'}>
        <Link
          to="/"
          className={'text-apricot'}
        >
          DB
        </Link>
      </h1>
      <nav className={'justify-self-end'}>
        <ul>
          <Link
            to="/">
          <li className={'inline-block'}>About</li>
          </Link>
          <Link
            to="/">
          <li className={'inline-block'}>Publications</li>
          </Link>
          <Link
            to="/">
          <li className={'inline-block'}>Teaching</li>
          </Link>
        </ul>
      </nav>
    </div>
  </header>
);


export default Header;
