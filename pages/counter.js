import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from '../app/reducers/counterSlice';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const styles = {
    row: 'container mx-auto w-full',
    value: 'text-lg',
    button:
      'inline-flex items-center px-5 py-2.5 mx-4 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    textbox:
      'px-5 py-2.5 mx-4 shadow-sm border focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-500 rounded-md',
    asyncButton:
      'inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500',
    amountButton:
      'inline-flex items-center px-5 py-2.5 mr-5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
  };

  return (
    <div className="relative bg-gray-50">
      <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-500 sm:text-4xl">
          <span className="block">Current Counter Session</span>
          <span className="block mt-10 text-5xl text-gray-900">{count}</span>
        </h2>
        <div className="flex justify-center pb-10 mt-8">
          <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>
            +
          </button>
          <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            -
          </button>
        </div>
        <div>
          <div className={styles.row}>
            <input
              className={styles.textbox}
              aria-label="Set increment amount"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button
              className={styles.amountButton}
              onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
            >
              Add Amount
            </button>
            <button
              className={styles.asyncButton}
              onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
            >
              Add Async
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
