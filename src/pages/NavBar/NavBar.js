import React from 'react';
import styles from './NavBar.css';
import IconLink from '../../components/IconLink/IconLink';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Menu from './menu/Menu';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <nav className={styles.navBar}>
        <ProfileCard size='small'
                     picture="toon" />
        
        <div className={styles.title}>
          <h1>Kaemon Lovendahl</h1> <hr/>
          <h2>Front End Web Developer</h2>
        </div>
        
        <div className={styles.links}>
          <IconLink link="github" />
          <IconLink link="twitter" />
          <IconLink link="linkedin" />
          <IconLink link="email" />
        </div>

        <Menu />
      </nav>
    )
  }
}

export default NavBar;