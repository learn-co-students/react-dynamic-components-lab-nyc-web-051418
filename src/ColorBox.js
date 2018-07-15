import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
     <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1}/> : null}
      </div>
    )
  }

}

//If/else statements don't work inside JSX. --> Syntactic sugar for function calls and object construction.
//Use ternary operator for inline conditional
//OR
//If ternary is not robust enough, use if statements OUTSIDE of JSX to determine which component should be used.
//Or use switch case with arrow functions for inline
//https://react-cn.github.io/react/tips/if-else-in-JSX.html


//if statements
// var opacity;
// if (opacity >= 0.1){
//   opacity={this.props.opacity - 0.1}
// } else {
//   return null;
// }
