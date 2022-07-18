import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';
import { MultiplyIcon } from '@/public/assets/dashboard/navBarIcon';

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
  badgeGroup: {
    primary: 'bg-primary-25 text-primary-600',
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
export const Badge = ({ color, text }) => {
  return (
    <span
      className={classNames(
        'font-Inter font-medium rounded-2xl text-center inline-flex items-center justify-center gap-1.5 text-xs text-secondary-25 px-2 py-0.5',
        styles.defaultColor[color]
      )}
    >
      {text}
    </span>
  );
};

Badge.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string
};

Badge.defaultProps = {
  color: 'primary',
  text: ''
};

export const BadgeGroup = ({ afterIcon, avatar, badgeText, color, icon, text }) => {
  const outputText = text && !badgeText ? text : badgeText;
  const outputIcon = afterIcon && !icon ? <MultiplyIcon stroke={styles.iconColor[color]} /> : icon;
  return (
    <span
      className={classNames(
        'font-Inter py-1 font-medium mr-2 rounded-2xl  inline-flex items-center justify-center gap-1.5',
        { 'text-sm pr-3 pl-1.5 text-center': !icon },
        { 'w-6 h-5 px-1.5 border': icon },
        styles.badgeGroup[color]
      )}
    >
      {badgeText && <Badge text={text} color={color} />}
      {avatar && (
        <span className="w-4 h-4 ">
          <Image className="rounded-full" src={avatar} alt="Avatar" />
        </span>
      )}
      {outputText} {outputIcon && <span className="w3 h3 cursor-pointer">{outputIcon}</span>}
    </span>
  );
};

BadgeGroup.propTypes = {
  // afterIcon: PropTypes.bool,
  avatar: PropTypes.shape({
    avatar: PropTypes.string
  }),
  badgeText: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.string
};

BadgeGroup.defaultProps = {
  // afterIcon: true,
  avatar: null,
  color: 'primary',
  badgeText: null,
  icon: null,
  text: ''
};
