import React from 'react'
import './App.css';
import Usingeffect from './Usingeffect';
import UsingRef from './UsingRef';
import UsingState from './UsingState';

function App() {
  return (
    <div className="App">
      <h4 style={{ textAlign: "left", color: "red" }}>using state</h4>
      <UsingState />
      <hr />
      <h4 style={{ textAlign: "left", color: "red" }}>using effect</h4>

      <Usingeffect />
      <hr />
      <h4 style={{ textAlign: "left", color: "red" }}>using ref</h4>

      <UsingRef />
    </div>
  );
}

export default App;
