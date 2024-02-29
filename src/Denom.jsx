import React from 'react';

const Denom = ({ state }) => (
  <div className="col-8">
    <div className="denomination-output twenties-output">{state.twenties}</div>
    <div className="denomination-output tens-output">{state.tens}</div>
    <div className="denomination-output fives-output">{state.fives}</div>
    <div className="denomination-output ones-output">{state.ones}</div>
    <div className="denomination-output quarters-output">{state.quarters}</div>
    <div className="denomination-output dimes-output">{state.dimes}</div>
    <div className="denomination-output nickels-output">{state.nickels}</div>
    <div className="denomination-output pennies-output">{state.pennies}</div>
  </div>
);

export default Denom;
