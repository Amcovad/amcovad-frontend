import React from 'react';
import { XIcon } from '@/public/assets/dashboard/navBarIcon';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const Alert = ({ message, type }) => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      {message && showAlert && type && (
        <div
          onClick={() => setShowAlert(false)}
          className={classNames('flex items-center justify-between p-3 mb-2 border-2  rounded-md', styles[type])}
        >
          <strong className="text-sm font-medium text-amcovad-secondary-700">{message}</strong>
          <button className="opacity-100" type="button" onClick={() => setShowAlert(false)}>
            <span className="sr-only"> Close </span>
            <XIcon width="11px" height="11px" />
          </button>
        </div>
      )}
    </>
  );
};
const styles = {
  danger: 'border-amcovad-danger/70 bg-amcovad-danger/10',
  info: 'border-amcovad-info/70 bg-amcovad-info/10',
  success: 'border-amcovad-success/70 bg-amcovad-success/10',
  warning: 'border-amcovad-warning/70 bg-amcovad-warning/10'
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['danger', 'info', 'success', 'warning'])
};
Alert.defaultProps = {
  type: 'danger'
};
export default Alert;
