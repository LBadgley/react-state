import React from 'react';
import PropTypes = 'prop-types';
import styles from './ColorPicker.css';

function ColorPicker({ selectedColor }) {
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={() => selectedColor('red')}>red</button>
      <button className={styles.blue} onClick={() => selectedColor('blue')}>blue</button>
      <button className={styles.green} onClick={selectedColor.bind(null, 'green')}>green</button>
    </section>
  );
}
