import React from 'react';

type ButtonProps = {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text }) => (
  <button type="button">{text}</button>
);
