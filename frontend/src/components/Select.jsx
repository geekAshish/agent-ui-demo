import React from "react";

export default function Select({
  label,
  value,
  onChange,
  name,
  options = [],
  required = false,
  className = ""
}) {
  return (
    <div className={`flex flex-col space-y-1 w-full ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full
          rounded-lg
          border border-gray-300
          bg-white
          px-3 py-2
          text-sm
          text-gray-900
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
          focus:border-blue-500
          transition
        "
      >
        {options?.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
