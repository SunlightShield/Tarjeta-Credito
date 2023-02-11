import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [numExp1, setNumExp1] = useState(0);
  const [numExp2, setNumExp2] = useState(0);
  const [numcvc, setNumCVC] = useState(0);

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const inputRefEXP = useRef(null);
  const inputRefEXP2 = useRef(null);

  const inputRefCvC = useRef(null);


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

    setNumCVC(randomNumberInRangeCvc(100, 999));

    toast.success("Tarjeta generada!!")
  };


  function handleClickCompara() {

    var clave = inputRef.current.value
    console.log(clave)

    var clave2 = inputRef2.current.value
    console.log(clave2)

    var clave3 = inputRef3.current.value;
    console.log(clave3)

    var clave4 = inputRef4.current.value;
    console.log(clave4)

    var exp1 = inputRefEXP.current.value;
    console.log(exp1)

    var exp2 = inputRefEXP2.current.value;
    console.log(exp2)

    var cvc = inputRefCvC.current.value;
    console.log(cvc)

    if (num == clave && num2 == clave2 && num3 == clave3 && num4 == clave4 && numExp1 == exp1 && numExp2 == exp2 && numcvc == cvc) {
      toast.success("los datos coinciden")

    } else {
      toast.error("no coinciden")
    }

  }


  return (
    <div className="App">
      <header className="App-header">


<div className='container'>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light" />


<div class="row">
            <div class="col-sm-10">
        <div className="card border-light mb-3">
          <div className="card-header text-dark">
            Tarjeta de credito
          </div>
          <div className="card-body">

            <div className='row'>
              <div className='d-flex justify-content-between p-2'>
                <label className='text-dark m-2 col-md-2' id="num">{num}</label>
                <label className='text-dark m-2 col-md-2'>{num2}</label>
                <label className='text-dark m-2 col-md-2'>{num3}</label>
                <label className='text-dark m-2 col-md-2'>{num4}</label>
              </div>
            </div>

            <div className='d-flex justify-content-between p-2'>
              <label className='text-dark m-2 col-md-2'>Exp: {numExp1} / {numExp2}  </label>
              <label className='text-dark m-2 col-md-2'>CVC: {numcvc} </label>
            </div>

          </div>
          <div className='card-footer'>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Genera mi tarjeta!</button>
          </div>
        </div>
        </div>
        </div>
        

       

          <div class="row">
            <div class="col-sm-10">
              <div className="card border-light mb-3">
                <div className="card-header text-dark">
                  Compara!
                </div>
                <div className="card-body">

                  <div className='row'>
                    <div className='d-flex justify-content-between p-2'>
                      <input className='col-md-2' type="number" ref={inputRef} />
                      <input className='col-md-2' type="number" ref={inputRef2} />
                      <input className='col-md-2' type="number" ref={inputRef3} />
                      <input className='col-md-2' type="number" ref={inputRef4} />
                    </div>
                  </div>

                  <div className='d-flex justify-content-between p-2'>
                    <label className='text-dark m-2'> Exp: <input className='col-md-2' type="number" ref={inputRefEXP} /> / <input className='col-md-2' type="number" ref={inputRefEXP2} />   </label>


                    <label className='text-dark m-2'> CVC: <input className='col-md-6' type="number" ref={inputRefCvC} /> </label>
                  </div>

                </div>
                <div className='card-footer'>
                  <button type="button" className="btn btn-primary" onClick={handleClickCompara}>A comparar!</button>
                </div>
              </div>
            </div>
          </div>
        
        </div>


      </header>
    </div>
  );
}

export default App;
