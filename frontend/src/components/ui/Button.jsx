// Button.jsx
import clsx from 'clsx'

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className,
  isLoading
}) {
    const baseClass = "px-5 py-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-medium text-sm rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition"
  return (
    <button
        type={type}
        onClick={onClick}
        disabled={isLoading || disabled}
        className={clsx(
            baseClass,
            className
        )}
      >
        {children}
      </button>
  );
}
