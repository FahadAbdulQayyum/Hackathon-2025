"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../lib/store';
import { incrementValue } from '../lib/features/counter/counterSlice';

const Page = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(incrementValue())}>Increment</button>
    </div>
  );
};

export default Page;
