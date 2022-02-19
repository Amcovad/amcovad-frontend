import React from 'react';

export function FloatLabel({ errorLabel, htmlFor, label }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${errorLabel} absolute text-sm text-amcovad-secondary-700 duration-300 transform -translate-y-7 scale-75 top-3 left-1 z-10 origin-[0] peer-focus:left-1  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7`}
    >
      {label}
    </label>
  );
}

export function CheckboxLabel({ ...props }) {
  return (
    <label htmlFor={props.htmlFor} className="block ml-2 text-[0.75rem] text-[#344055] font-normal font-Inter ">
      {props.label}
    </label>
  );
}
