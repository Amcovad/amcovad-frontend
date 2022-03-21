import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAlert, selectAlert } from '../app/reducers/alertSlice';

export default function Alert() {
  const alert = useSelector(selectAlert);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const styles = {
    row: 'container mx-auto w-full',
    value: 'text-lg',
    button:
      'inline-flex items-center px-5 py-2.5 mx-4 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    textbox:
      'px-5 py-2.5 mx-4 shadow-sm border focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-500 rounded-md',
    danger:
      'inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500',
    success:
      'inline-flex items-center px-5 py-2.5 mr-5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
  };

  return (
    <div className="relative">
      <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div>
          <AlertBox type={alert.type} message={alert.message} />
          <div className={styles.row}>
            <textarea
              className={styles.textbox}
              aria-label="Set Alert Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className={styles.danger} onClick={() => dispatch(setAlert({ type: ALERT_TYPE.ERROR, message }))}>
              Add Error Message
            </button>
            <button
              className={styles.success}
              onClick={() => dispatch(setAlert({ type: ALERT_TYPE.SUCCESS, message }))}
            >
              Add Sucess Alert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const AlertBox = ({ type, message }) =>
  type &&
  message && (
    <div className={`p-4 border-l-4 border-${type}-400 bg-${type}-600`}>
      <div className="flex">
        <div className="ml-3">
          <p className={`text-sm text-${type}-700`}>{message}</p>
        </div>
      </div>
    </div>
  );

const ALERT_TYPE = {
  SUCCESS: 'green',
  ERROR: 'red',
  WARNING: 'yellow',
  INFO: 'blue'
};
