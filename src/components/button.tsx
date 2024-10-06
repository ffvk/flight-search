// src/components/Button.js
import React from "react";

const Button = ({ text, onClick }: any) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
