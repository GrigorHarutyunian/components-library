import clsx from "clsx";
import type { Size, Color, Variant } from "../../models";
import "./Button.css";
import type { ReactNode } from "react";
interface IButtonProps {
  size?: Size;
  color?: Color;
  variant?: Variant;
  href?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children: ReactNode;
}

const Button = ({
  size,
  color,
  children,
  variant,
  href,
  onClick,
  disabled,
}: IButtonProps) => {
  const className = clsx(
    "button",
    `button--${size || "medium"}`,
    `button--${color || "primary"}`,
    `button--${variant || "contained"}`,
    {
      "is-disabled": disabled,
    },
  );

  return href ? (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
