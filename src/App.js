import React, { Component } from 'react';
import Carbs from './components/Carbs';
import Protein from './components/Protein';
import Fats from './components/Fats';
import Result from './components/Result';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      carbs: 0,
      protein: 0,
      fats: 0,
      total: 0,
    }
    this.updateF = this.updateF.bind(this);
    this.updateP = this.updateP.bind(this);
    this.updateC = this.updateC.bind(this);
  }

  updateF(num){
    this.setState((prevState, props) => ({
      fats: num,
      total:prevState.total + num
  }));
  }
  updateP(num){
    this.setState((prevState, props) => ({
      protein: num,
      total:prevState.total + num
  }));
  }
  updateC(num){
    this.setState((prevState, props) => ({
      carbs: num,
      total:prevState.total + num
  }));
  }


  render() {
    return (
      <div className="App">
          <Carbs updateC={this.updateC}/>
          <Protein updateP={this.updateP}/>
          <Fats updateF={this.updateF}/>
          <Result total={this.state}/>
      </div>
    );
  }
}

export default App;
