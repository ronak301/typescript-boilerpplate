import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Container = ({
  children,
  fullWidth = false,
  className
}: ContainerProps) => {
  return (
    <div
      className={classNames(styles.root, className, {
        [styles.fullWidth]: fullWidth
      })}
    >
      {children}
    </div>
  );
};

export default Container;
