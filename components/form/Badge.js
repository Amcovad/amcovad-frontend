import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';
import { MultiplyIcon } from '@/public/assets/dashboard/navBarIcon';

const Badge = ({ avatar, color, hasIcon, text }) => {
  const styles = {
    defaultColor: {
      primary: 'bg-primary-400',
      secondary: 'bg-secondary-500',
      danger: 'bg-danger-500',
      warning: 'bg-warning-500',
      success: 'bg-success-500',
      info: 'bg-info-400',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
      orange: 'bg-orange-500'
    },
    hasIcon: {
      primary: 'bg-primary-50 text-primary-600',
      secondary: 'bg-secondary-25 text-secondary-500',
      danger: 'bg-danger-25 text-danger-600',
      warning: 'bg-warning-50 text-warning-600',
      success: 'bg-success-25 text-success-600',
      info: 'bg-info-50 text-info-600',
      purple: 'bg-purple-50 text-purple-600',
      pink: 'bg-pink-50 text-pink-600',
      orange: 'bg-orange-50 text-orange-600'
    },
    iconColor: {
      primary: '#018FC6',
      secondary: '#777F8D',
      danger: '#C92B33',
      warning: '#BB9D2A',
      success: '#00A254',
      info: '#019DB2',
      purple: '#6938EF',
      pink: '#DD2590',
      orange: '#EC4A0A'
    }
  };

  const hasIconClass = hasIcon ? 'hasIcon' : 'defaultColor';
  return (
    <span
      className={classNames(
        'font-Inter font-medium mr-2 rounded-2xl text-center inline-flex items-center justify-center gap-1.5',
        { 'text-xs text-secondary-25 px-2 py-0.5': !hasIcon },
        { 'text-sm py-1 pr-3 pl-1.5': hasIcon },
        styles[hasIconClass][color]
      )}
    >
      {hasIcon && (
        <span className="w-4 h-4 ">
          <Image className="rounded-full" src={avatar} alt="Avatar" />
        </span>
      )}
      {text}
      {/* <p className={classNames('text-sm py-1 pr-3 pl-1.5 rounded-2xl', styles.defaultColor[color])}>
        We’ve just released a new feature
      </p> */}
      {hasIcon && <span className="w-3 h-3 cursor-pointer">{<MultiplyIcon stroke={styles.iconColor[color]} />}</span>}
    </span>
  );
};

Badge.propTypes = {
  avatar: PropTypes.node,
  color: PropTypes.string,
  hasIcon: PropTypes.bool,
  text: PropTypes.string
};

Badge.defaultProps = {
  avatar: null,
  color: 'primary',
  hasIcon: false,
  text: ''
};
export default Badge;
