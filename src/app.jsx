import React, { Component } from 'react';

class ChangeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
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
    this.setState({ [e.target.name]: parseFloat(e.target.value) || 0 });
  }

  calculateChange() {
    const changeDue = this.state.amountReceived - this.state.amountDue;
    let remaining = changeDue * 100; // Convert to cents for easier calculations
    const denominations = {
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

    Object.keys(denominations).forEach((key) => {
      if (key !== 'changeDue') {
        change[key] = Math.floor(remaining / denominations[key]);
        remaining = remaining % denominations[key];
      }
    });

    this.setState(change);
  }

  render() {
    return (
      <div className="container">
        <h1>Change Calculator</h1>
        <div className="row">
          <div className="col-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <input type="number" name="amountDue" value={this.state.amountDue} onChange={this.handleChange} placeholder="How much is due?" className="form-control" />
                <input type="number" name="amountReceived" value={this.state.amountReceived} onChange={this.handleChange} placeholder="How much was received?" className="form-control" />
                <button onClick={this.calculateChange} className="btn btn-primary">Calculate</button>
              </div>
            </div>
          </div>
          <div className="col-8">
            {/* Outcome alerts */}
            {this.state.changeDue > 0 && <div className="alert alert-success">The total change due is ${this.state.changeDue.toFixed(2)}</div>}
            {this.state.changeDue < 0 && <div className="alert alert-danger">Additional money owed: {(this.state.changeDue * -1).toFixed(2)}</div>}
            {/* Grid for Denominations */}
            {Object.keys(this.state).map((key) => {
              if (key !== 'amountDue' && key !== 'amountReceived' && key !== 'changeDue') {
                return (
                  <div className="well" key={key}>
                    <h1>{key.charAt(0).toUpperCase() + key.slice(1)}</h1>
                    <p className="change">{this.state[key]}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeCalculator;
