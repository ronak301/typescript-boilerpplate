import React, { ReactNode } from 'react';
import {
  Link as RouterLink,
  NavLink as RouterNavLink,
  LinkProps,
  NavLinkProps
} from 'react-router-dom';

interface Props {
  readonly children: ReactNode;
}

const Link = ({ children, ...props }: Props & LinkProps & NavLinkProps) => {
  if (props?.activeClassName) {
    return <RouterNavLink {...props}>{children}</RouterNavLink>;
  }

  return <RouterLink {...props}>{children}</RouterLink>;
};

export default Link;
