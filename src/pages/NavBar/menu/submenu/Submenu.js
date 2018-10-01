import React from 'react';
import styles from './Submenu.css';

class Submenu extends React.Component {

  render() {
    return (
      <div className={styles[this.props.create]}>
        <ul className={styles.submenu}>
          <li className={styles.submenuItem}>About Me</li>
          <li className={styles.submenuItem}>Jamming</li>
        </ul>
      </div>
    )
  }
}

export default Submenu;