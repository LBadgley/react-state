import React, { PureComponent } from 'react';
import styles from './colorPicker.css';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  selectedColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <section className={styles.ColorPicker}>
        <button className={styles.red} onClick={this.selectedColor.bind(null, 'red')}>Red</button>
        <button className={styles.yellow} onClick={() => this.selectedColor('yellow')}>Yellow</button>
        <button className={styles.blue} onClick={() => this.selectedColor('blue')}>Blue</button>
        <div className={styles[color]}>ayyeeee</div>
      </section>
    );
  }
}
