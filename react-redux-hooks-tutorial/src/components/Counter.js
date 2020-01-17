import React from 'react';
import { useSelector } from 'react-redux';

const Counter = ({ onIncrease, onDecrease, number }) => {
  const counter = useSelector(state => state.counter);
  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};


export default Counter;

