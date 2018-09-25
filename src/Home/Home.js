import React from 'react';
import IconLink from '../components/IconLink/IconLink';
import TypeName from './TypeName/TypeName';
import returnVideo from './BgVideo/BgVideo';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import styles from './Home.css';
import '../components/ProfileCard/ProfileCard.css';

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

          <div className={styles.typeName}>
            <TypeName />
          </div>

          <div className={styles.flipCard}>
            <ProfileCard name="Kaemon Lovendahl" title="Front End Developer" />
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;