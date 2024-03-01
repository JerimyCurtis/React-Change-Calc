import React from 'react';

const Output = ({ changeDue }) => (
  <div className="col-8">
    {changeDue > 0 && <div className="alert alert-success">Total change due: ${changeDue.toFixed(2)}</div>}
    {changeDue < 0 && <div className="alert alert-danger">Additional money owed: ${(changeDue * -1).toFixed(2)}</div>}
  </div>
);

export default Output;
