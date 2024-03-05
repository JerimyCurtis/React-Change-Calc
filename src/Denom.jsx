import React from 'react';

const Denom = ({ state }) => (
  <div className="col-8">
    <div className="denomination-output change twenties-output">{state.twenties}</div>
    <div className="denomination-output change tens-output">{state.tens}</div>
    <div className="denomination-output change fives-output">{state.fives}</div>
    <div className="denomination-output change ones-output">{state.ones}</div>
    <div className="denomination-output change quarters-output">{state.quarters}</div>
    <div className="denomination-output change dimes-output">{state.dimes}</div>
    <div className="denomination-output change nickels-output">{state.nickels}</div>
    <div className="denomination-output change pennies-output">{state.pennies}</div>
  </div>
);


export default Denom;
