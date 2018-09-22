import React from 'react';
import { IconLink } from './link';
import returnVideo from './video';
import styles from './home.css';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        {returnVideo()}
        <div className={styles.grid}>
          <IconLink icon="github" />
          <IconLink icon="twitter" />
          <IconLink icon="linkedin" />
          <IconLink icon="email" />
        </div>
      </div>
    );
  }

}

export default HomePage;