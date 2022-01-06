import React from "react";

const Button = ({ style, value, onClick }) => {
  return (
    <button
      className={`h-10 px-5 m-2 uppercase transition-colors duration-150 ${style}`}
      onClick={() => onClick()}
    >
      {value}
    </button>
  );
};

export default Button;
