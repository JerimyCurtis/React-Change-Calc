import React from 'react';

const Denom = ({ state }) => (
  <div className="col-8">
    <div className="denomination-output twenties-output">Twenties: {state.twenties || 0}</div>
    <div className="denomination-output tens-output">Tens: {state.tens || 0}</div>
    <div className="denomination-output fives-output">Fives: {state.fives || 0}</div>
    <div className="denomination-output ones-output">Ones: {state.ones || 0}</div>
    <div className="denomination-output quarters-output">Quarters: {state.quarters || 0}</div>
    <div className="denomination-output dimes-output">Dimes: {state.dimes || 0}</div>
    <div className="denomination-output nickels-output">Nickels: {state.nickels || 0}</div>
    <div className="denomination-output pennies-output">Pennies: {state.pennies || 0}</div>
  </div>
);

export default Denom;
