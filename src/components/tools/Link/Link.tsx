import React, { ReactNode } from 'react';
import {
  Link as RouterLink,
  NavLink as RouterNavLink,
  LinkProps as RouterLinkLink,
  NavLinkProps
} from 'react-router-dom';

interface LinkProps {
  children: ReactNode;
  to?: string;
  activeClassName?: string;
}

const Link = ({
  children,
  activeClassName,
  to,
  ...props
}: LinkProps & RouterLinkLink & NavLinkProps) => {
  const internal = /^\/(?!\/)|^#/.test(to);

  if (internal) {
    if (activeClassName) {
      return (
        <RouterNavLink to={to} activeClassName={activeClassName} {...props}>
          {children}
        </RouterNavLink>
      );
    }

    return (
      <RouterLink to={to} {...props}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
};

export default Link;
