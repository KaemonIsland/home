import React from 'react';
import styles from './BgVideo.css';
import videoMp4 from '../../assets/video/Down-time.mp4'
import videoWebm from '../../assets/video/Down-time.webm'

let BgVideo = () => {
  return (
    <div className={styles.video}>
      <video className={styles.content} autoPlay muted loop>
        <source src={ videoMp4 } type="video/mp4" />
        <source src={ videoWebm } type="video/webm" />
        Your Browser is not supported!
      </video>
    </div>
  );
}

export default BgVideo;