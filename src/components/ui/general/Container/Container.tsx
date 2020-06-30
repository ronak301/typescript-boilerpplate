import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Container.module.scss';

interface Props {
  readonly children: ReactNode;
  readonly className?: string;
  readonly fullWidth?: boolean;
}

const Container = ({ children, fullWidth = false, className }: Props) => {
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
