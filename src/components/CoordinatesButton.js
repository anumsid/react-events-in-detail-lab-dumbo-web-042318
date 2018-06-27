// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{
  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }
  render() {
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}

export default CoordinatesButton;
