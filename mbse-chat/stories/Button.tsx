import React from "react";
import "./button.css";

export interface ButtonProps {
  /** Unique ID for accessibility or testing */
  id?: string;
  /** Button label text */
  label: string;
  /** Variant style */
  variant?: "primary" | "secondary" | "destructive" | "outline";
  /** Button size */
  size?: "small" | "medium" | "large";
  /** Optional icon element */
  icon?: React.ReactNode;
  /** Should the icon appear on the right side? */
  iconRight?: boolean;
  /** Disable the button */
  disabled?: boolean;
  /** Optional click handler */
  onClick?: () => void;
  /** Extra class names */
  className?: string;
  /** Button type */
  type?: "button" | "submit" | "reset";
}

/** Primary UI component for user interaction */
export const Button: React.FC<ButtonProps> = ({
                                                id,
                                                label,
                                                variant = "primary",
                                                size = "medium",
                                                icon,
                                                iconRight = false,
                                                disabled = false,
                                                onClick,
                                                className = "",
                                                type = "button",
                                              }) => {
  const baseClasses =
      "flex items-center justify-center gap-2 font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeClasses =
      size === "small"
          ? "px-3 py-1 text-sm"
          : size === "large"
              ? "px-8 py-3 text-lg"
              : "px-6 py-2 text-sm";

  const variantClasses = {
    primary: "bg-[#00597C] hover:bg-[#0073A0] text-white focus:ring-[#0073A0]",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-400",
    destructive: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-600",
    outline:
        "bg-transparent border border-[#00597C] text-[#00597C] hover:bg-[#00597C]/10 focus:ring-[#00597C]",
  }[variant];

  // Disabled styling: faded and unclickable
  const disabledClasses =
      "opacity-50 cursor-not-allowed hover:none focus:ring-0";

  return (
      <button
          id={id}
          type={type}
          onClick={!disabled ? onClick : undefined}
          disabled={disabled}
          className={`${baseClasses} ${sizeClasses} ${variantClasses} ${
              disabled ? disabledClasses : ""
          } ${className}`}
      >
        {!iconRight && icon && <span className="flex items-center">{icon}</span>}
        <span>{label}</span>
        {iconRight && icon && <span className="flex items-center">{icon}</span>}
      </button>
  );
};
