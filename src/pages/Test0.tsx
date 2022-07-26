import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../redux/counter';
import { produncActions } from '../redux/counter';

// interface Iprops {
//   onClick: () => void
// }

export default function Test0() {
  const counter = useSelector((store: any) => store.counter);
  // const [count, setCount] = useState<number>(0);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(produncActions.getIncrease(0));
    // dispatch(increase());
    // setCount((prev: any) => prev + 1);
  };

  const onDecrease = () => {
    dispatch(produncActions.getDecrease(0));
    // dispatch(decrease());
    // setCount((prev: any) => prev - 1);
  };

  return (
    <>
      <h1>Counter : {counter.count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
}
