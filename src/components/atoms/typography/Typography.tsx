import React from 'react';

type props = {
  variant: string;
  text: string;
};

export const Typography: React.FC<props> = ({ text }) => <p>{text}</p>;
