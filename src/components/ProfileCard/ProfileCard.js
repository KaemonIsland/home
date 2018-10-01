import React from 'react';
import styles from './ProfileCard.css';
import kaemonProfile from '../../assets/Images/PortfolioSelfie.jpeg'
import kaemonToon from '../../assets/Images/KaemonToonZoom.png'

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    let picture = this.props.picture === 'kaemon' ? kaemonProfile : kaemonToon;
    return (
      <div className={styles[this.props.size]}>
        <img className={styles.profile} src={picture} alt='Kaemon Lovendahl'/>
      </div>
    )
  }
}

export default ProfileCard;