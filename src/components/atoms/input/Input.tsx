import React from 'react';

type props = {
  type: string;
};

export const Input: React.FC<props> = ({ type }) => <input type={type} />;
