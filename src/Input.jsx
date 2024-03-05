import React from 'react';

const Input = ({ amountDue, amountReceived, handleChange, calculateChange, calculateTip }) => (
  <div>
    <input type="number" name="amountDue" value={amountDue} onChange={handleChange} placeholder="Amount Due" />
    <input type="number" name="amountReceived" value={amountReceived} onChange={handleChange} placeholder="Amount Received" />
    <button onClick={calculateChange}>Calculate Change</button>
    <button onClick={() => calculateTip(5)}>Tip 5%</button>
    <button onClick={() => calculateTip(10)}>Tip 10%</button>
    <button onClick={() => calculateTip(20)}>Tip 20%</button>
  </div>
);

export default Input;
