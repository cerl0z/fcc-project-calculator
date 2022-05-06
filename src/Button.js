import React from "react";

const Button = ({ name, number, symbol }) => (
  <div>
    <button
      // onClick={() =>
      //   console.log(`${number === undefined ? symbol : number} clicked`)
      // }
      id={name}
    >
      {symbol || number}
    </button>
  </div>
);

export default Button;
