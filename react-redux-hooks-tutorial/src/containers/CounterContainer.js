import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { INCREMENT, DECREMENT } from '../modules/counter';
import { useSelector, useDispatch } from 'react-redux';

const CounterContainer = () => {
  const counter = useSelector(state => state.counter, []);
  
  const dispatch = useDispatch()
  const onIncrement = useCallback(() => dispatch({ type: INCREMENT }),[dispatch])
  const onDcrement = useCallback(() => dispatch({ type: DECREMENT }),[dispatch]);

  return (
    <Counter number={counter} onIncrease={onIncrement} onDecrease={onDcrement} />
  );
}

export default CounterContainer;