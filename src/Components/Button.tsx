import React from "react";
import "./Button.css";

interface ButtonProps {
  btnValue: string;
  onClick?: () => void;
}

const Button = ({ btnValue, onClick }: ButtonProps) => {
  return (
    <button className="box" onClick={onClick}>
      {btnValue}
    </button>
  );
};

export default Button;
