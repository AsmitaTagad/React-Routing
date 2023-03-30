import React, { useState } from 'react';
import style from './App.module.css';

let ranNo = Math.floor(Math.random() * 100) + 1;

function App() {
  const [Guess, setGuess] = useState('');
  const [count, setCount] = useState(0);
  const [randomNo, setRandomNo] = useState(ranNo);
  const [msg, setMsg] = useState('');

  function handleChange(e) {
    setGuess(e.target.value);
  }

  function handleClick() {
    if (Number(randomNo) === Number(Guess)) {
      setMsg("Congratulations!! You Guess Lucky Number");
    }

    if (randomNo < Guess) {
      alert("You Gussed a grater number");
    }

    if (randomNo > Guess) {
      alert("You Gussed a smaller number");
    }

    setCount(count + 1);
    setGuess('');
  }

  return (
    <div className={style.container}>

      <p>{ranNo}</p>
      <p>{msg}</p>
      <h1>Guess lucky Number Game</h1>
      <input type='Number' placeholder='Guss Lucky Number...' value={Guess} onChange={handleChange} />
      <button onClick={handleClick}>Match Number</button>

    </div>
  );
}

export default App;
