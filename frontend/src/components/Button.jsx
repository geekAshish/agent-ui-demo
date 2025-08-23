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
    const baseClass = "px-5 py-2 bg-blue-600 text-white font-medium text-sm rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition"
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
