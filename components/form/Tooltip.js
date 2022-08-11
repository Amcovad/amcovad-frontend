import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Whisper, Popover, Tooltip } from 'rsuite';

export default function ToolTip({ arrow, children, color, content, placement, title }) {
  const CustomComponent = ({ content, color, title }) => (
    <div
      className={classNames(
        'text-xs text-left font-Inter max-w-xs py-2 px-3 cursor-pointer rounded-md relative',
        { 'bg-white ': color === 'light' },
        { 'bg-secondary-800': color === 'dark' }
      )}
    >
      <div>
        {title && (
          <p
            className={classNames(
              'font-medium py-1',
              { 'text-secondary-700 ': color === 'light' },
              { 'text-white': color === 'dark' }
            )}
          >
            {title}
          </p>
        )}
        <p
          className={classNames(
            'font-normal font-Inter leading-[18px]',
            { 'text-secondary-500 ': color === 'light' },
            { 'text-white': color === 'dark' },
            { 'pb-1': title }
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <Whisper
      placement={placement}
      trigger="click"
      speaker={
        color === 'light' ? (
          <Popover arrow={arrow}>
            <CustomComponent content={content} color={color} title={title} />
          </Popover>
        ) : (
          <Tooltip arrow={arrow}>
            <CustomComponent content={content} color={color} title={title} />
          </Tooltip>
        )
      }
    >
      <span>{children}</span>
    </Whisper>
  );
}

ToolTip.propTypes = {
  arrow: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.element.isRequired,
  content: PropTypes.any.isRequired,
  placement: PropTypes.oneOf([
    'top',
    'bottom',
    'right',
    'left',
    'bottomStart',
    'bottomEnd',
    'topStart',
    'topEnd',
    'leftStart',
    'rightStart',
    'leftEnd',
    'rightEnd',
    'auto',
    'autoVertical',
    'autoVerticalStart',
    'autoVerticalEnd',
    'autoHorizontal',
    'autoHorizontalStart',
    'autoHorizontalEnd'
  ]).isRequired,
  title: PropTypes.string
};

ToolTip.defaultProps = {
  arrow: true,
  color: 'dark',
  title: null
};
