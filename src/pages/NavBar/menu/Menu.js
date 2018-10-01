import React from 'react';
import Submenu from './submenu/Submenu';
import styles from './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true,
      create: 'end'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let toggler = this.state.showMenu === false ? true : false;
    this.setState({ showMenu: toggler });
  }
  componentDidMount() {
    this.setState({ create: 'begin' });
  }

  componentWillUnmount() {
    this.setState({ create: 'end' });
    setTimeout(() => {
      
    }, 500);
  }

  render() {
    return (
      <div className={styles.menuWrapper}>
        <div className={styles.nav}>
          <ul className={styles.menu}
              onClick={this.handleClick}>
            <li className={styles.menuItem}>
              Projects
            </li>
          </ul>
        </div>
        {this.state.showMenu && <Submenu create={this.state.create} />}
      </div>
    )
  }
}

export default Menu;