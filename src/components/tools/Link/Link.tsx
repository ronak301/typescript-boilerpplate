import React, { ReactNode } from 'react';
import {
  Link as RouterLink,
  NavLink as RouterNavLink,
  LinkProps as RouterLinkLink,
  NavLinkProps
} from 'react-router-dom';

interface LinkProps {
  children: ReactNode;
}

const Link = ({
  children,
  ...props
}: LinkProps & RouterLinkLink & NavLinkProps) => {
  if (props?.activeClassName) {
    return <RouterNavLink {...props}>{children}</RouterNavLink>;
  }

  return <RouterLink {...props}>{children}</RouterLink>;
};

export default Link;
