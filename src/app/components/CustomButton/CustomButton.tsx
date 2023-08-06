import React from 'react';
import "./button.css";

const CustomButton = ({name}: {name: string}) => {
  return (
    <button className="default-button">{name}</button>
  );
};

export default CustomButton;
