import React from "react"
import * as styles from "./button.module.scss"

// type ButtonProps = {
//   text: string;
//   onClick: Function;
// };

export const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick} className= {styles.button}>
    {children}
  </button>
)
