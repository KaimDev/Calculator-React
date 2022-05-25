import './App.css';
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

  function syntaxis(){
    setInput('Syntaxis Error');
    setInputError(true)
  };
  
  const calculatorValue = () => {
    if(input) {
      try{
        setInput(evaluate(input));

      }catch{syntaxis()};
    }else{
      setInput('Ingrese un numero');
      setInputError(true);
    }
  };

  function clearClear() {
    setInput('');
    setInputError(false);
  };

  function del () {
    setInput(input.substring(0, input.length - 1));
  };


  return (
    <div className="App">
      <div className='container-calculator'>
        <div className='monitor'>
          <Monitor input={input} />
        </div>
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
          <Button useClick={del}>delete</Button>
        </div>
        <div className='line'>
          <Clear error={inputError} useClick={clearClear}>Clear</Clear>
        </div>
      </div>

      <footer>GITHUB @KaimDev</footer>

    </div>
  );
}

export default App;
