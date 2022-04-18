import React from 'react';
import { XIcon } from '@/public/assets/dashboard/navBarIcon';
import classNames from 'classnames';

import PropTypes from 'prop-types';

const Alert = ({ danger, info, onClick, message, success, warning }) => {
  return (
    <>
      {message && (
        <div
          onClick={onClick}
          className={classNames(
            'flex items-center justify-between p-3 mb-2 border-2  rounded-md ',
            { 'border-amcovad-success/70 bg-amcovad-success/10': success },
            { 'border-amcovad-danger/70 bg-amcovad-danger/10': danger },
            { 'border-amcovad-info/70 bg-amcovad-info/10': info },
            { 'border-amcovad-warning/70 bg-amcovad-warning/10': warning }
          )}
        >
          <strong className="text-sm font-medium text-amcovad-secondary-700">{message}</strong>
          <button className="opacity-100" type="button" onClick={onClick}>
            <span className="sr-only"> Close </span>
            <XIcon width="11px" height="11px" />
          </button>
        </div>
      )}
    </>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired
};
export default Alert;
