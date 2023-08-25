import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius, width }) => {
  return (
    <div
      type="button"
      style={{ backgroundColor: bgColor, bgColor, color, borderRadius }}
      className={`text-${size} w-${width} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </div>
  );
};

export default Button;
