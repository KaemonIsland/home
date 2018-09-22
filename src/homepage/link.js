import React from 'react';
import { FaGithubSquare, FaTwitterSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styles from './link.css'

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
      <div>
        <a href="#">
          <IconContext.Provider value={{ color: 'white', size: '4rem'}}>
            <div>
              {this.icon(this.props.icon)}
            </div>
          </IconContext.Provider>
        </a>
      </div>
    )
  }
}