import React from 'react';
import PropTypes from 'prop-types';
import { Label, ErrorMessage } from '.';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import { SelectArrowIcon } from '@/public/assets/dashboard/navBarIcon';
import { showError, showSuccess } from '@/utils/form-helpers';
import ToolTip from '@/components/form/Tooltip';
import { HelpIcon, SuccessIcon } from '@/public/assets/dashboard/navBarIcon';
export function SelectField({
  children,
  className,
  containerClassName,
  floatLabel,
  feedBack,
  label,
  labelClassName,
  leadingIcon,
  name,
  toolTip,
  hintText,
  toolTipTitle,
  toolTipContent,
  toolTipColor,
  toolTipPlacement,
  toolTipIcon,
  showTooltipArrow
}) {
  const {
    register,
    formState: { dirtyFields, errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <>
      {label && !floatLabel && (
        <Label
          feedBack="FEEDBACK.NONE"
          className="text-base flex items-center gap-x-2"
          name={name}
          htmlFor={name}
          text={label}
        >
          {toolTip && (
            <ToolTip
              arrow={showTooltipArrow}
              title={toolTipTitle}
              content={toolTipContent}
              placement={toolTipPlacement}
              color={toolTipColor}
              toolTipIcon={toolTipIcon}
            />
          )}
        </Label>
      )}
      <div className={classNames('relative z-0 mb-2 w-full group', containerClassName)}>
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{leadingIcon}</div>
        )}
        <select
          id={name}
          {...register(name)}
          className={classNames(
            'block py-3.5 px-2 w-full text-base appearance-none transition ease-in-out bg-secondary-25 border-secondary-100 border-2 rounded-md focus:outline-none focus:ring-0 peer',
            className,
            { 'pl-10 pr-8': leadingIcon },
            {
              'mt-6 placeholder-transparent border-secondary-300 appearance-none bg-secondary-25 text-secondary-700 focus:ring-0 peer':
                floatLabel
            },
            {
              errorClassName: showError(hasErrors, feedBack)
            },
            {
              successClassName: showSuccess(isValid, feedBack)
            },
            {
              focusClassName: !hasErrors && !isValid
            }
          )}
        >
          {children}
        </select>

        {floatLabel && (
          <Label
            name={name}
            feedBack={feedBack}
            htmlFor={name}
            floatLabel
            text={label}
            floatLabelClass={labelClassName}
          />
        )}

        <div className={classNames('absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none')}>
          <SelectArrowIcon />
        </div>

        {toolTip && floatLabel && (
          <div
            className={classNames(
              'absolute right-0 flex items-center inset-y-0',
              { 'pr-8': !hasErrors && !isValid },
              { hidden: toolTip === hasErrors || isValid }
            )}
          >
            <ToolTip
              arrow={showTooltipArrow}
              color={toolTipColor}
              title={toolTipTitle}
              content={toolTipContent}
              placement={toolTipPlacement}
              toolTipIcon={toolTipIcon}
            />
          </div>
        )}

        {hasErrors && (
          <div
            className={classNames('absolute right-0 flex items-center pointer-events-none inset-y-0', {
              'pr-8': hasErrors
            })}
          >
            <HelpIcon />
          </div>
        )}

        {isValid && (feedBack === 'FEEDBACK.SUCCESS' || feedBack === 'FEEDBACK.ALL') && (
          <div
            className={classNames('absolute right-0 flex items-center pointer-events-none inset-y-0', {
              'pr-8': isValid
            })}
          >
            <SuccessIcon />
          </div>
        )}
      </div>
      {hintText && <p className="pt-1 text-sm text-secondary-700">{hintText} </p>}
    </>
  );
}

SelectField.propTypes = {
  feedBack: PropTypes.string,
  floatLabel: PropTypes.bool,
  label: PropTypes.string,
  leadingIcon: PropTypes.node,
  name: PropTypes.string.isRequired,
  toolTip: PropTypes.bool,
  hintText: PropTypes.string
};

SelectField.defaultProps = {
  feedBack: 'FEEDBACK.ALL',
  floatLabel: false,
  label: null,
  leadingIcon: null,
  toolTip: false,
  hintText: null
};

const Select = ({
  defaultOption,
  floatLabel,
  feedBack,
  label,
  leadingIcon,
  name,
  options,
  toolTip,
  hintText,
  showTooltipArrow,
  toolTipTitle,
  toolTipContent,
  toolTipColor,
  toolTipPlacement,
  toolTipIcon
}) => {
  return (
    <>
      <SelectField
        floatLabel={floatLabel}
        feedBack={feedBack}
        label={label ? label : defaultOption}
        leadingIcon={leadingIcon}
        name={name}
        toolTip={toolTip}
        hintText={hintText}
        toolTipTitle={toolTipTitle}
        toolTipContent={toolTipContent}
        showTooltipArrow={showTooltipArrow}
        toolTipColor={toolTipColor}
        toolTipPlacement={toolTipPlacement}
        toolTipIcon={toolTipIcon}
      >
        {defaultOption && (
          <option key={name} value="">
            {defaultOption}
          </option>
        )}
        {options.map(({ title, value }, id) => {
          if (!value || !title) return null;
          const optionTitle = title || value;
          const optionValue = value || title;
          return (
            <option key={id} value={optionValue}>
              {optionTitle}
            </option>
          );
        })}
      </SelectField>
      <ErrorMessage name={name} />
    </>
  );
};

export default Select;

Select.propTypes = {
  defaultOption: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array
};

Select.defaultProps = {
  defaultOption: null,
  label: null,
  options: []
};
