import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import Denom from './Denom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '', 
      changeDue: null,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculateChange() {
    const changeDue = this.state.amountReceived - this.state.amountDue;
    const remainingChange = Math.round(changeDue * 100);
    const twenties = Math.floor(remainingChange / 2000);
    const change = {
      changeDue,
      twenties,
      remainingChange: remainingChange % 2000
    };
    console.log('change object before setState:', change);
    this.setState(change);
  }
  //   const changeDue = this.state.amountReceived - this.state.amountDue;
  //   const remainingChange = Math.round(changeDue * 100);
  //   const change = {
  //     changeDue,
  //     twenties: Math.floor(remainingChange / 2000),
  //     remainingChange: remainingChange % 2000,
  //     tens: Math.floor(remainingChange / 1000),
  //     remainingChange: remainingChange % 1000,
  //     fives: Math.floor(remainingChange / 500),
  //     remainingChange: remainingChange % 500,
  //     quarters: Math.floor(remainingChange / 25),
  //     remainingChange: remainingChange % 25,
  //     dimes: Math.floor(remainingChange / 10),
  //     remainingChange: remainingChange % 10,
  //     nickels: Math.floor(remainingChange / 5),
  //     remainingChange: remainingChange % 5,
  //     pennies: remainingChange
  //   };
  //   this.setState(change);
  // }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <h1>Change Calculator</h1>
        <Input
          amountDue={this.state.amountDue}
          amountReceived={this.state.amountReceived}
          handleChange={this.handleChange}
          calculateChange={this.calculateChange}
        />
        <Output changeDue={this.state.changeDue} />
        <Denom state={this.state} />
      </div>
    );
  }
}

export default App;
