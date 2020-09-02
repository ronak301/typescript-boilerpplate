/**
 * This route is just for showcase, don't follow the
 * way of styling or structure. Clear it and start
 * building something.
 */

import React, { useRef, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

import { Portal } from 'components/tools';
import { Container } from 'components/ui/general';
import { Text } from 'components/ui/forms';
import {
  toggleActive,
  fetchGunnarx2Start,
  selectActive,
  selectGunnarx2
} from 'redux/example';
import {
  useBreakpoint,
  useClickOutside,
  useScroll,
  useWindowSize,
  useKeyPress,
  useInterval
} from 'hooks';

const Home = () => {
  const showcaseHooksDataRef = useRef(null);
  const [intervalCount, setIntervalCount] = useState(0);
  const [clickOutsideCount, setClickOutsideCount] = useState(0);
  const [keyPressEscCount, setKeyPressEscCount] = useState(0);
  const dispatch = useDispatch();
  const selectorActive = useSelector(selectActive);
  const selectorGunnarx2 = useSelector(selectGunnarx2);
  const breakpoint = useBreakpoint();
  const scroll = useScroll(250);
  const windowSize = useWindowSize(250);

  useClickOutside(showcaseHooksDataRef, () => {
    setClickOutsideCount(clickOutsideCount + 1);
  });

  useKeyPress(27, () => {
    setKeyPressEscCount(keyPressEscCount + 1);
  });

  useInterval(() => {
    setIntervalCount(intervalCount + 1);
  }, 1000);

  const renderGunnarx2 = useCallback(() => {
    const { data, loading, error } = selectorGunnarx2;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error...</div>;
    }

    if (data && Object.keys(data).length) {
      // eslint-disable-next-line camelcase
      const { avatar_url, url } = data.data;
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line camelcase */}
          <img src={avatar_url} alt="" />
        </a>
      );
    }

    return (
      <div>
        <button type="button" onClick={() => dispatch(fetchGunnarx2Start())}>
          Fetch gunnarx2
        </button>
      </div>
    );
  }, [dispatch, selectorGunnarx2]);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <Container>
          <h1>Home</h1>
          <p>
            Lorem ipsum{' '}
            <a
              href="https://www.modohockey.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              dolor sit amet
            </a>{' '}
            consectetur, adipisicing elit.
          </p>
          <p>
            Accusantium reiciendis, minus repellat repellendus quis nesciunt sit
            neque doloribus eius vitae architecto.
          </p>
          {[...Array(5)].map((number, index) => {
            const increasedIndexByTwo = index + 2;
            const Heading: any = `h${increasedIndexByTwo}`;
            return (
              <div key={increasedIndexByTwo}>
                <Heading>
                  Heading&nbsp;
                  {increasedIndexByTwo}
                </Heading>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p>
                  Accusantium reiciendis, minus repellat repellendus quis
                  nesciunt sit neque doloribus eius vitae architecto.
                </p>
              </div>
            );
          })}
          <Text />
        </Container>
      </section>
      <aside
        ref={showcaseHooksDataRef}
        style={{
          position: 'fixed',
          boxShadow: '0 0 15px 5px rgba(0, 0, 0, 0.1)',
          top: '50%',
          left: '15px',
          transform: 'translateY(-50%)',
          padding: '30px',
          backgroundColor: 'rgb(240, 240, 240)',
          fontSize: '14px',
          maxWidth: '385px',
          marginRight: '15px'
        }}
      >
        <h6>Showcase hooks data</h6>
        <ul style={{ marginBottom: 0 }}>
          <li>
            Breakpoint (debounce 250): <b>{breakpoint}</b>
            <ul style={{ marginBottom: 0 }}>
              <li>
                Uses <code style={{ fontSize: '14px' }}>useResize()</code>
                for the resize event and gets the breakpoints from{' '}
                <code style={{ fontSize: '14px' }}>_variables.scss</code>
              </li>
            </ul>
          </li>
          <li>
            Clicks outside of this box: <b>{clickOutsideCount}</b>
          </li>
          <li>
            Interval every 1000ms: <b>{intervalCount}</b>
          </li>
          <li>
            Amount of escape key presses: <b>{keyPressEscCount}</b>
          </li>
          <li>
            Scroll (throttle 250):{' '}
            <b>
              {scroll.y}
              px {scroll.direction}
            </b>
          </li>
          <li>
            Window size (debounce 250):{' '}
            <b>
              {windowSize.width}x{windowSize.height}
              px
            </b>
            <ul style={{ marginBottom: 0 }}>
              <li>
                Uses <code style={{ fontSize: '14px' }}>useResize()</code>
                for the resize event
              </li>
            </ul>
          </li>
          <li>
            Some hooks are not being showcased, so take a look at them yourself:
            <ul style={{ marginBottom: 0 }}>
              <li>
                <code style={{ fontSize: '14px' }}>useEventListener()</code>
              </li>
              <li>
                <code style={{ fontSize: '14px' }}>usePrevious()</code>
              </li>
              <li>
                <code style={{ fontSize: '14px' }}>useTabAccess()</code>
              </li>
              <li>
                <code style={{ fontSize: '14px' }}>useResize()</code>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
      <Portal>
        <section>
          <Container>
            <div>
              <button
                type="button"
                data-cy="toggle-redux-button"
                onClick={() => dispatch(toggleActive())}
              >
                Toggle redux
              </button>
              <span data-cy="toggle-redux-value">
                {` - ${selectorActive.toString()}`}
              </span>
            </div>
            {renderGunnarx2()}
          </Container>
        </section>
      </Portal>
    </>
  );
};

export default Home;
