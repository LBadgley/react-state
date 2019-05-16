import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import styles from './RandomColor.css';

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    trigger: new Date(),
    img: ''
  }
  randomColor = () => {
    const colors = ['darkRed', 'indigo', 'mediumBlue', 'dodgerBlue', 'gold', 'orangeRed'];
    const getRandom = Math.floor(Math.random() * colors.length);

    return colors[getRandom];
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState({ color: this.getRandom(), trigger: new Date(), img: '' });
    }, 1500);
  }

  componentDidUpdate(prevState) {
    if(prevState.color === this.state.color) {
      this.setState({ img: 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg' });
    }
  }
  componentWillUnmount() {
    this.myInterval && clearInterval(this.myInterval);
  }

  render() {
    const { color, img } = this.state;
    const styles = {
      background: img ? `center / contain url (${img})` : color,
    };
    return <div className={styles[this.state.color]}></div>;
  }
}
