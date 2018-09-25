import React from 'react';
import styles from './ProfileCard.css';
import profilePic from '../../assets/Images/PortfolioSelfie.jpeg'

class FlipCard extends React.Component {

  render() {
    return (
      <div className={styles.card}>
        <img src={profilePic} />
        <div className={styles.cardName}>{this.props.name}</div>
        <div className={styles.cardTitle}><p>{this.props.title}</p></div>
      </div>
    )
  }
}

export default FlipCard;