import React, { ReactNode } from 'react';

import { Header, Footer } from 'components/ui/general';
import { useTabAccess } from 'hooks';
import styles from './Layout.module.scss';

interface LayoutProps {
  readonly children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
