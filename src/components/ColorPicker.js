import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

function ColorPicker({ setSelectedColor }) {
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={() =>setSelectedColor('crimson')}>red</button>
      <button className={styles.blue} onClick={() =>setSelectedColor('blue')}>blue</button>
      <button className={styles.yellow} onClick={() => setSelectedColor('yellow')}>yellow</button>
    </section>
  );
}

ColorPicker.propTypes = {
  setSelectedColor: PropTypes.func.isRequired
};

export default ColorPicker;
