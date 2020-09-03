import React, { useMemo } from 'react';
import classNames from 'classnames';

import { Link } from 'components/tools';
import { Container } from 'components/ui/general';
import { HeisenbergIcon } from 'assets/icons';
import styles from './Header.module.scss';

const Header = () => {
  const navigationLinks = useMemo(
    () => [
      {
        to: '/',
        children: 'Home'
      },
      {
        to: '/grid',
        children: 'Grid'
      },
      {
        to: '/form',
        children: 'Form'
      },
      {
        to: `/${new Date().getTime()}`,
        children: '404'
      }
    ],
    []
  );

  return (
    <header className={styles.root}>
      <Container>
        <div className="grid grid--fill">
          <div className="grid__item grid__item--fixed">
            <div className={styles.logotype}>
              <Link className={styles.logotypeAnchor} to="/">
                <HeisenbergIcon />
              </Link>
            </div>
          </div>
          <div className="grid__item">
            <nav className="grid">
              {navigationLinks.map(({ to, children }) => (
                <div
                  key={to}
                  className={classNames('grid__item', 'grid__item--width-4/12')}
                >
                  <Link
                    to={to}
                    exact
                    className={styles.navLink}
                    activeClassName={styles.navLinkActive}
                  >
                    {children}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
