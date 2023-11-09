import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState(''); // State to store user input
  const [result, setResult] = useState(''); // State to store the calculation result

  // Function to handle user input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Function to perform the calculation based on the user input
  const calculate = () => {
    try {
      // Use JavaScript's eval function to evaluate the user input as an expression
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error'); // Handle any errors in the calculation
    }
  };

  // Function to clear the input and result
const clear = () => {
  setInput('');
  setResult('');
};


  return (
    <div className="App">
      <div className="calculator">
        <h1>Calculator</h1>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        <div className="button-grid">
          <div className="button-row">
            <button onClick={() => setInput(input + '7')}>7</button>
            <button onClick={() => setInput(input + '8')}>8</button>
            <button onClick={() => setInput(input + '9')}>9</button>
            <button onClick={() => setInput(input + ' / ')}>/</button>
            <button onClick={clear} className="clear-button">C</button>
          </div>
          <div className="button-row">
              <button onClick={() => setInput(input + '4')}>4</button>
              <button onClick={() => setInput(input + '5')}>5</button>
              <button onClick={() => setInput(input + '6')}>6</button>
              <button onClick={() => setInput(input + ' * ')}>*</button>
            </div>
            <div className="button-row">
              <button onClick={() => setInput(input + '1')}>1</button>
              <button onClick={() => setInput(input + '2')}>2</button>
              <button onClick={() => setInput(input + '3')}>3</button>
              <button onClick={() => setInput(input + ' + ')}>+</button>
            </div>
            <div className="button-row">
              <button onClick={() => setInput(input + '0')}>0</button>
              <button onClick={() => setInput(input + '.')}>.</button>
              <button onClick={calculate}>=</button>
              <button onClick={() => setInput(input + ' - ')}>-</button>
            </div>
        </div>
        <div className="input-container">
 
  <div className="result">
    <p>{result}</p>
  </div>
</div>



      </div>
    </div>
  );
}

export default App;
