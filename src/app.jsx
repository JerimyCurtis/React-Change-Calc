import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import Denom from './Denom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '', // Initialize as empty string
      amountReceived: '', // Initialize as empty string
      changeDue: 0,
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
    // Use parseFloat, fallback to 0 if NaN
    const amountDue = parseFloat(this.state.amountDue) || 0;
    const amountReceived = parseFloat(this.state.amountReceived) || 0;
    let changeDue = amountReceived - amountDue;

    if (changeDue < 0) {
      // Handle scenario where more money is due than received
      this.setState({ changeDue });
      return;
    }

    let remaining = changeDue * 100; // Convert to cents
    const Denominations = {
      twenties: 2000,
      tens: 1000,
      fives: 500,
      ones: 100,
      quarters: 25,
      dimes: 10,
      nickels: 5,
      pennies: 1,
    };

    let change = { changeDue };

    Object.keys(Denominations).forEach(key => {
      change[key] = Math.floor(remaining / Denominations[key]);
      remaining %= Denominations[key];
    });

    this.setState(change);
  }

  render() {
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
