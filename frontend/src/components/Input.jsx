import React from "react";
import clsx from "clsx";

export const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  name,
  className,
  ...props
}) => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(
        "w-full rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 transition focus:outline-none text-center",
        "px-3 py-0",
        className
      )}
      {...props}
    />
  );
};

export default Input;
