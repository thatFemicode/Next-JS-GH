import React from "react";

const Select = ({ label, value, onChange, options, className }) => {
  const selectClass = className ? `${className} field` : "field";
  return (
    <div>
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
