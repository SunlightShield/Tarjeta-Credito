import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [numExp1, setNumExp1] = useState(0);
  const [numExp2, setNumExp2] = useState(0);
  const [numcvc, setNumCVC] = useState(0);
  

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function randomNumberInRange2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function randomNumberInRange3(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function randomNumberInRange4(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function randomNumberInRangeExp(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function randomNumberInRangeExp2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function randomNumberInRangeCvc(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1000, 9999));
    setNum2(randomNumberInRange2(1000, 9999));
    setNum3(randomNumberInRange3(1000, 9999));
    setNum4(randomNumberInRange4(1000, 9999));

    setNumExp1(randomNumberInRangeExp(1, 12));
    setNumExp2(randomNumberInRangeExp2(22, 50));

    setNumCVC(randomNumberInRangeCvc(100, 999))
  };

  return (
    <div className="App">
      <header className="App-header">

        <div className="card border-light mb-3">
          <div className="card-header text-dark">
            Tarjeta de credito
          </div>
          <div className="card-body">

            <div className='row'>
              <div className='d-flex p-2'>
                <label className='text-dark m-2'>{num}</label>
                <label className='text-dark m-2'>{num2}</label>
                <label className='text-dark m-2'>{num3}</label>
                <label className='text-dark m-2'>{num4}</label>
              </div>
            </div>

            <div className='d-flex p-2'>
              <label className='text-dark m-2'>Exp: {numExp1} / {numExp2}  </label>
              <label className='text-dark m-2'>CVC: {numcvc} </label>
            </div>

          </div>
          <div className='card-footer'>
            <button onClick={handleClick}>Genera mi tarjeta!</button>

          </div>
        </div>



      </header>
    </div>
  );
}

export default App;
