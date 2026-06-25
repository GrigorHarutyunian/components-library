import clsx from "clsx";
import type { Size, Color, Variant } from "../../models";
import "./Button.css";
import type { ReactNode } from "react";
interface IButtonProps {
  size: Size;
  color: Color;
  variant: Variant;
  href: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children: ReactNode;
  className?: string;
}

const Button = ({
  size,
  color,
  children,
  variant,
  href,
  onClick,
  disabled,
  className,
}: IButtonProps) => {
  const classes = clsx(
    className,
    `cl-button`,
    `cl-button--${size}`,
    `cl-button--${color}`,
    `cl-button--${variant}`,
    {
      "is-disabled": disabled,
    },
  );

  return href ? (
    <a className={classes} href={href} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
