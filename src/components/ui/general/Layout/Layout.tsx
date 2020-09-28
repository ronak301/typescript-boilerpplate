import React, { ReactNode } from 'react';

import { Header, Footer } from 'components/ui/general';
import { useTabAccess } from 'hooks';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useTabAccess();

  return (
    <div className={styles.root}>
      <Header />
      <section className={styles.content}>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
