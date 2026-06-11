import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ name, value, onChange, placeholder }, ref) => {
    return (
      <input
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input"
      />
    );
  }
);

export default Input;