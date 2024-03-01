import React from 'react';

const Output = ({ changeDue }) => (
  <div className="col-8">
    {changeDue > 0 && <div className="alert alert-success">The total change due is ${changeDue}</div>}
    {changeDue < 0 && <div className="alert alert-danger">Additional money owed: ${(-changeDue).toFixed(2)}</div>}
  </div>
);

export default Output;
