import React from 'react';
import styles from './colorPicker.css';

export default function ColorPicker() {
  const red = () => {
    console.log('red');
  };

  const yellow = () => {
    console.log('yellow');
  };

  const blue = () => {
    console.log('blue');
  };
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={red}>Red</button>
      <button className={styles.yellow} onClick={yellow}>Yellow</button>
      <button className={styles.blue} onClick={blue}>Blue</button>
      {/* <div className={styles[color]}></div> */}
    </section>
  
  );
}
