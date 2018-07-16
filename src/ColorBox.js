import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newValue = this.props.opacity
    let a;
    if (this.props.opacity >= 0.2) {
      a = <ColorBox opacity={this.props.opacity - 0.1} />
    } else {
      a = null
    }

    return (
      <div className="color-box" style={{opacity: newValue}}>
        {a
          // this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null
        }
      </div>
    )
  }

}
