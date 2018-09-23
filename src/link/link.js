import React from 'react';
import { FaGithubSquare, FaTwitterSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styles from './link.css'

let links = {
  github: 'https://github.com/KaemonIsland',
  twitter: 'https://twitter.com/KaemonIsland?lang=en',
  linkedin: 'https://www.linkedin.com/in/kaemon-lovendahl-08150564/',
  email: 'mailto:kaemonlovendahl14@hotmail.com'
}

export class IconLink extends React.Component {

  icon(iconType) {
    switch (iconType) {
      case "github":
        return <FaGithubSquare />;
      case "twitter":
        return <FaTwitterSquare />;
      case "linkedin":
        return <FaLinkedin />;
      case "email":
        return <FaEnvelope />;
    }
  }

  render() {
    return (
      <div className={styles.link} >
        <a href={links[this.props.link]}>
          <IconContext.Provider value={{ color: 'black', size: '6rem'}}>
            <div>
              {this.icon(this.props.link)}
            </div>
          </IconContext.Provider>
        </a>
      </div>
    )
  }
}