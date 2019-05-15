import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './RandomColor.css';

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    trigger: new Date(),
    img: ''
  };

  randomColor = () => {
    const colors = ['darkRed', 'indigo', 'mediumBlue', 'dodgerBlue', 'gold', 'orangeRed'];
    const randomColors = Math.floor(Math.random() * colors.length);

    return colors[randomColors];
  }
}
