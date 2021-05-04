import React from 'react';
import "./button.scss"

// type ButtonProps = {
//   text: string;
//   onClick: Function;
// };

export const Button = ({ text, onClick }) => (
  <button type="button" onClick={onClick} className="a-button">{text}</button>
);
