import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newValue = this.props.opacity
    return (
      <div className="color-box" style={{opacity: newValue}}>
        {
          this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null
        }
      </div>
    )
  }

}
