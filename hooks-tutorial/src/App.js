import React, { useState } from 'react';
import logo from './logo.svg';
import * as Component from './component';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <br />
      {visible && <Component.Info />}
      <Component.Counter />
      <Component.ContextSample />
      <Component.CounterUseReducer />
      <Component.InfoUseReducer />
      <Component.Average />
      <Component.UsePromiseSample />
    </div>
  );
}

export default App;
