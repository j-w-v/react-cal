import React, { Component } from 'react';

class Result extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
        <div>
          <div className="calories">
          {this.props.total.total} calories  
          </div>
          <div className="carbs">
          carbs: {this.props.total.carbs} kcal 
          </div>
          <div className="protein">
          Protein: {this.props.total.protein} kcal
          </div>
          <div className="fats">
          Fat: {this.props.total.fats} kcal
          </div>
            
        </div>
    );
  }
}

export default Result;