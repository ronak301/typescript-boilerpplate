import React, { ReactNode } from 'react';

import { Header, Footer } from 'components/ui/general';
import { useTabAccess } from 'hooks';
import styles from './Layout.module.scss';

interface Props {
  readonly children: ReactNode;
}

const Layout = ({ children }: Props) => {
  useTabAccess();

  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
