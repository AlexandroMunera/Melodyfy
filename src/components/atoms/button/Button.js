import React from "react"
import "./button.module.scss"

// type ButtonProps = {
//   text: string;
//   onClick: Function;
// };

export const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick} className="a-button">
    {children}
  </button>
)
