import React from 'react';
import "./button.scss"

type ButtonProps = {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text }) => (
  <button className="a-button" type="button">{text}</button>
);
