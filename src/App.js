import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function ArmstrongChecker() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const isArmstrong = (num) => {
    const digits = num.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === Number(num);
  };

  const handleCheck = () => {
    if (number === '') {
      setResult('Please enter a number.');
      return;
    }

    const armstrong = isArmstrong(number);
    setResult(
      armstrong
        ? `${number} is an Armstrong number`
        : `${number} is not an Armstrong number`
    );
  };

  return (
    <div>
      <h2>Armstrong Number Checker</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCheck}>
        Check
      </button>
      <p>{result}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ArmstrongChecker />
    </div>
  );
}

export default App;
