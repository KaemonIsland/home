import React from 'react';
import IconLink from '../components/IconLink/IconLink';
import TypeName from './TypeName/TypeName';
import returnVideo from './BgVideo/BgVideo';
import styles from './Home.css';

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