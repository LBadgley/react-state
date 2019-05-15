import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default function ColorDisplay({ selectedColor }) {
  return (
    <div className={styles.ColorDisplay} style={{ backgroundColor: selectedColor }}>{selectedColor}</div>
  );
}

ColorDisplay.propTypes = {
  selectedColor: PropTypes.func.isRequired
};

