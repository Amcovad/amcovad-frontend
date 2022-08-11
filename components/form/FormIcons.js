import React from 'react';
import classNames from 'classnames';
import { HelpIcon, ToolTipIcon, SuccessIcon } from '@/public/assets/dashboard/navBarIcon';
import ToolTip from '@/components/form/Tooltip';

const FormIcons = ({
  feedBack,
  floatLabel,
  toolTip,
  isValid,
  hasErrors,
  toolTipTitle,
  toolTipContent,
  toolTipColor,
  toolTipPlacement,
  showTooltipArrow,
  isTextArea,
  isSelect
}) => {
  return (
    <>
      {toolTip && !isValid && floatLabel && (
        <div
          className={classNames(
            'absolute right-0 flex items-center',
            { 'top-5': isTextArea },
            { 'inset-y-0': !isTextArea },
            { 'pr-3': !isValid && !hasErrors && !isSelect },
            {
              'pr-8': hasErrors && !isSelect
            },
            { hidden: toolTip === hasErrors && isSelect },
            { 'pr-8': !hasErrors && isSelect }
          )}
        >
          <ToolTip
            arrow={showTooltipArrow}
            color={toolTipColor}
            title={toolTipTitle}
            content={toolTipContent}
            placement={toolTipPlacement}
          >
            <ToolTipIcon />
          </ToolTip>
        </div>
      )}

      {hasErrors && (
        <div
          className={classNames(
            'absolute right-0 flex items-center pointer-events-none',
            { 'top-5': isTextArea },
            { 'inset-y-0': !isTextArea },
            { 'pr-3': !isSelect },
            { 'pr-8': isSelect }
          )}
        >
          <HelpIcon />
        </div>
      )}

      {isValid && (feedBack === 'FEEDBACK.SUCCESS' || feedBack === 'FEEDBACK.ALL') && (
        <div
          className={classNames(
            'absolute right-0 flex items-center pointer-events-none',
            { 'top-5': isTextArea },
            { 'inset-y-0': !isTextArea },
            { 'pr-3': !isSelect },
            { 'pr-8': isSelect }
          )}
        >
          <SuccessIcon />
        </div>
      )}
    </>
  );
};

export default FormIcons;
