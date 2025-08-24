import React, { useEffect, useRef } from "react";

export default function TextBox({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  name,
  className = ""
}) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [value]);

  return (
    <div className={`flex flex-col space-y-1 w-full ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        className="w-full resize-none rounded-md border p-1 border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={2}
      />
    </div>
  );
}
