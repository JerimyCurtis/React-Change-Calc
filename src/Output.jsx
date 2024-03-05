import React from 'react';

const Output = ({ changeDue, tipAmount }) => (
  <div className="output-container">
    {changeDue > 0 && (
      <div className="alert alert-success change-due">The total change due is ${changeDue}</div>
    )}
    {changeDue < 0 && (
      <div className="alert alert-danger amount-owed">Additional money owed: ${(-changeDue).toFixed(2)}</div>
    )}
    {tipAmount > 0 && (
      <div className="alert alert-info tip-amount">Tip Amount: ${tipAmount.toFixed(2)}</div>
    )}
  </div>
);

export default Output;
