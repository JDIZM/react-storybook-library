import React from "react";
import "./button.css";

// we dont need to export a type; we do with interfaces
export interface ButtonProps {
  primary: boolean;
  backgroundColor: React.CSSProperties["backgroundColor"] | undefined;
  size: string;
  label: string;
  onClick: () => void | undefined;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary,
  backgroundColor,
  size,
  label,
  onClick,
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
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: undefined,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default Button;
