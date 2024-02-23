import React from 'react';

const Denom = ({ state }) => (
  <div className="col-8">
    <div className="denomination-output twenties-output">Twenties: {state.twenties}</div>
    <div className="denomination-output tens-output">Tens: {state.tens}</div>
    <div className="denomination-output fives-output">Fives: {state.fives}</div>
    <div className="denomination-output ones-output">Ones: {state.ones}</div>
    <div className="denomination-output quarters-output">Quarters: {state.quarters}</div>
    <div className="denomination-output dimes-output">Dimes: {state.dimes}</div>
    <div className="denomination-output nickels-output">Nickels: {state.nickels}</div>
    <div className="denomination-output pennies-output">Pennies: {state.pennies}</div>
  </div>
);

export default Denom;
