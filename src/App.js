import './App.css';
import FreeCodeCampLogo from './img/FreeCodeCamp_logo.png'
import Button from './components/button'
import Monitor from './components/monitor';
import Clear from './components/clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState(false);


  const addInput = val => {
    setInput(input + val);
  };

  
  const calculatorValue = () => {
    if(input) {
      setInput(evaluate(input));
    }else{
      setInput('Ingrese un numero');
      setInputError(true);
    }
  }

  function clearClear() {
    setInput('');
    setInputError(false);
  }


  return (
    <div className="App">
      <div className='container-calculator'>
        <Monitor input={input} />
        <div className='line'>
          <Button useClick={addInput}>7</Button>
          <Button useClick={addInput}>8</Button>
          <Button useClick={addInput}>9</Button>
          <Button useClick={addInput}>+</Button>
        </div>
        <div className='line'>
          <Button useClick={addInput}>4</Button>
          <Button useClick={addInput}>5</Button>
          <Button useClick={addInput}>6</Button>
          <Button useClick={addInput}>-</Button>
        </div>
        <div className='line'>
          <Button useClick={addInput}>1</Button>
          <Button useClick={addInput}>2</Button>
          <Button useClick={addInput}>3</Button>
          <Button useClick={addInput}>*</Button>
        </div>
        <div className='line'>
          <Button useClick={addInput}>%</Button>
          <Button useClick={addInput}>0</Button>
          <Button useClick={addInput}>.</Button>
          <Button useClick={addInput}>/</Button>
        </div>
        <div className='line'>
          <Button useClick={calculatorValue}>=</Button>
          <Clear error={inputError} useClick={clearClear}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
