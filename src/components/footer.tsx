import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

type FooterProps = { email: string, twitter: string, linkedin: string, };

const Footer: React.FC<FooterProps> = ({email, twitter, linkedin}) => {
  return (
    <footer
      className={'bg-blue-powder w-screen'}
    >
      <div className={'max-w-sm flex flex-row flex-nowrap items-center justify-center space-x-4'}>
        <span className={'inline-block'}>
          <a href={`mailto: ${email}`}><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
        </span>
      <span className={'inline-block'}>
          <a href={`${twitter}`}><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
        </span>
      <span className={'inline-block'}>
          <a href={`${linkedin}`}><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
        </span>
      </div>
    </footer>
  )
};


export default Footer;
