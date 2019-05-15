import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

export default class App extends PureComponent {
  state = {
    color: ''
  }

  selectedColor = color => {
    this.setState({ color });
  }

  render() {
    const color = this.state.color;
    return (
    <>
      <ColorPicker selectedColor={this.selectedColor} />
      <ColorDisplay color={color} />
    </>
    );
  }
}
