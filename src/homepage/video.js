import React from 'react';
import styles from './video.css';
import video1 from '../assets/video/Down-time.mp4'
import video2 from '../assets/video/Down-time.webm'

let renderVideo = () => {
  return (
    <div className={styles.video}>
      <video className={styles.content} autoPlay muted loop>
        <source src={ video1 } type="video/mp4" />
        <source src={ video2 } type="video/webm" />
        Your Browser is not supported!
      </video>
    </div>
  );
}

export default renderVideo;