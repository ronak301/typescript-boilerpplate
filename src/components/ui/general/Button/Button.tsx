import React, { ReactNode, ReactType } from 'react';
import classNames from 'classnames';

import { Link } from 'components/tools';
import styles from './Button.module.scss';

interface ButtonProps<T> {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  onClick?: (event: Event) => void;
  ghost?: boolean;
  color?: 'primary';
  target?: string;
  to?: string;
  as?: T;
}

const Button = <T extends ReactType>({
  children,
  type,
  href,
  size = 'md',
  className,
  disabled,
  onClick,
  ghost,
  color = 'primary',
  target,
  to,
  as
}: OverwritableType<ButtonProps<T>, T>) => {
  let ElementType: ReactType = as || 'button';
  if (to || href) ElementType = Link;

  return (
    <ElementType
      type={type}
      className={classNames(styles.root, className, {
        [styles.disabled]: disabled,
        [styles.ghost]: ghost,
        [styles[`${color}Color`]]: color,
        [styles[`${size}Size`]]: size
      })}
      to={to}
      href={href}
      disabled={disabled}
      onClick={onClick && !disabled ? onClick : null}
      target={target && href ? target : null}
    >
      {children}
    </ElementType>
  );
};

export default Button;
