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
      changeDue: '0',
      twenties: '0',
      tens: '0',
      fives: '0',
      ones: '0',
      quarters: '0',
      dimes: '0',
      nickels: '0',
      pennies: '0',
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculateChange() {
    const amountDue = parseFloat(this.state.amountDue);
    const amountReceived = parseFloat(this.state.amountReceived);
    const changeDue = amountReceived - amountDue;
    const remainingChange = Math.round(changeDue * 100);
    let remaining = remainingChange;
    const change = {
      changeDue: changeDue.toFixed(2).toString(),
      twenties: Math.floor(remaining / 2000).toString(),
    };
    remaining %= 2000;
    change.tens = Math.floor(remaining / 1000).toString();
    remaining %= 1000;
    change.fives = Math.floor(remaining / 500).toString();
    remaining %= 500;
    change.ones = Math.floor(remaining / 100).toString();
    remaining %= 100;
    change.quarters = Math.floor(remaining / 25).toString();
    remaining %= 25;
    change.dimes = Math.floor(remaining / 10).toString();
    remaining %= 10;
    change.nickels = Math.floor(remaining / 5).toString();
    remaining %= 5;
    change.pennies = remaining.toString();
    this.setState(change);
  }  

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
