import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faSquareTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import './Footers.css';

let socialmediaLinks = [
  {
    "name": "github",
    "link": "https://github.com/gagannani99"
  },
  {
    "name": "instagram",
    "link": "https://www.instagram.com/gagan_nani99/"
  },
  {
    "name": "email",
    "link": "mailto:gagannani99@gmail.com"
  },
  {
    "name": "twitter",
    "link": ""  
  },
  {
    "name": "youtube",
    "link": "" 
  },
  {
    "name":"linkedin",
    "link":"https://www.linkedin.com/in/gagan-sai-alasapuri"
  }
];
const Footers = () => {
  return (
    <div className='text-center' id='footer'> {/* This id is important for scrolling */}
      <h1>Contact Me</h1>
      <div className="favi-cons d-flex flex-row justify-content-center">
        {socialmediaLinks.map((social) => {
          const iconMapping = {
            github: faGithub,
            instagram: faInstagram,
            email: faEnvelope,
            twitter: faSquareTwitter,
            youtube: faSquareYoutube,
            linkedin: faLinkedin
          };

          return social.link ? (
            <div className="fonts">
            <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={iconMapping[social.name]} className='font-awsome' />
            </a>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Footers;
