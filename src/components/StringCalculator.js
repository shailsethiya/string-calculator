import React, { useState } from 'react';
import { add } from '../utils/add';

export default function StringCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError('');
    } catch (e) {
      setResult(null);
      setError(e.message);
    }
  };

  return (
    <div>
      <h2>String Calculator</h2>
      <textarea
        placeholder="Enter numbers"
        rows="4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}