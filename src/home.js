import styles from './style.css';
import React from 'react';

class Button extends React.Component {

  render() {
    return (
      <button class={styles.coolStory}>Vanity Button</button>
    );
  }
}

export default Button;