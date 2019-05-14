import React, { PureComponent } from 'react';
import styles from './Incrementor.css';


export default class Incrementor extends PureComponent {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }
  render() {
    const { count } = this.state;
    return (
        <>
        <p style={styles}>Current count: {count}</p>
        <button style={styles} onClick={this.incrementCount}>Increment</button>
        </>
    );
  }
}

