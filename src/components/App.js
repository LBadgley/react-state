import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

export default class App extends PureComponent {
  state = {
    color: ''
  }

  setSelectedColor = color => {
    this.setState({ color });
  }

  render() {
    const color = this.state.color;
    return (
    <>
      <ColorPicker setSelectedColor={this.setSelectedColor} />
      <ColorDisplay color={color} />
    </>
    );
  }
}
