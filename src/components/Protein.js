import React, { Component } from 'react';

class Protein extends Component {
  constructor(props){
    super(props);
    this.updateState = this.updateState.bind(this);
  }
  updateState(e){
    const num = parseInt(e.target.value);
    this.props.updateP(num*4);
  }
  render() {
    return (
        <input
         placeholder="0"
         type="number"
         onChange={this.updateState}
         min="0"
         />
    );
  }
}

export default Protein;