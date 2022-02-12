import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
import "./button.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  backgroundColor = "white",
  size = "medium",
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor: backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
