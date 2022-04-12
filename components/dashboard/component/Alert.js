import React from 'react';
import { XIcon } from '@/public/assets/dashboard/navBarIcon';

const Alert = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-3 mb-2 border-2 border-amcovad-success/70 rounded-md bg-amcovad-success/10"
    >
      <strong className="text-sm font-medium text-amcovad-secondary-700">Transaction created successfully!</strong>
      <button className="opacity-100" type="button" onClick={onClick}>
        <span className="sr-only"> Close </span>
        <XIcon width="11px" height="11px" />
      </button>
    </div>
  );
};

export default Alert;
