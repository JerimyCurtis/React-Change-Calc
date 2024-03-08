import React from 'react';

const Input = ({ amountDue, amountReceived, handleChange, calculateChange }) => (
  <div className="col-4">
    <div className="panel panel-default">
      <div className="panel-body">
        <input type="number" name="amountDue" value={amountDue} onChange={handleChange} placeholder="$ due" className="form-control" />
        <input type="number" name="amountReceived" value={amountReceived} onChange={handleChange} placeholder="$ received" className="form-control" />
        <button onClick={calculateChange} className="btn btn-primary">Calculate</button>
      </div>
    </div>
  </div>
);

export default Input;
