import React from 'react';
import { IconLink } from '../link/link';
import { TypeName } from './typename';
import returnVideo from './video';
import styles from './home.css';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        {returnVideo()}
        <div className={styles.grid}>
          <IconLink link="github" />
          <IconLink link="twitter" />
          <IconLink link="linkedin" />
          <IconLink link="email" />

          <TypeName className={styles.typeName} />
        </div>
      </div>
    );
  }

}

export default HomePage;