import React from "react";
import './custom-button.style.scss'
const CustomButton = ({ children, ...otherbuttonProps }) => {
  return (
    <button className="custom-button" {...otherbuttonProps}>
      {children}
    </button>
  );
};
export default CustomButton;
