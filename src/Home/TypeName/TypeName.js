import React from 'react';
import styles from './TypeName.css';
import Typing from 'react-typing-animation';

class TypeName extends React.Component {
  
  render() {
    return (
      <div>
        <div>Let's build something...</div>
        <div className={styles.typed}>
          <Typing speed={70} loop={true} >
            <span>New</span>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={14} />
            <span>Challenging</span>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={14} />
            <span>Imaginative</span>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={14} />
            <span>Engaging</span>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={14} />
            <span>Together</span>
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={14} />
            <Typing.Reset count={1} delay={500} />
          </Typing>
        </div>
      </div>
    )
  }
}

export default TypeName;