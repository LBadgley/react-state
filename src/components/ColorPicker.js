import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

function ColorPicker({ selectedColor }) {
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={() =>selectedColor('red')}>red</button>
      <button className={styles.blue} onClick={() =>selectedColor('blue')}>blue</button>
      <button className={styles.yellow} onClick={() =>selectedColor('yellow')}>yellow</button>
    </section>
  );
}

ColorPicker.propTypes = {
  selectedColor: PropTypes.func.isRequired
};

export default ColorPicker;
