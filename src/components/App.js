import React from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

export default function App() {
  state = {
    color: ''
  }

  selectedColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;
  }

  return (
    <>
      <ColorPicker selectedColor={this.selectColor} />
      <ColorDisplay color={color} />>
    </>
  )
}
