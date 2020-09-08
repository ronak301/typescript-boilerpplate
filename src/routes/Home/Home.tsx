/**
 * This route is just for showcase, don't follow the
 * way of styling or structure. Clear it and start
 * building something.
 */

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

import { Portal, Link } from 'components/tools';
import { Container } from 'components/ui/general';
import {
  toggleActive,
  fetchUserStart,
  selectActive,
  selectUser
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
  const [rangeValue, setRangeValue] = useState('1');
  const dispatch = useDispatch();
  const selectorActive = useSelector(selectActive);
  const selectorUser = useSelector(selectUser);
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

  useEffect(() => {
    dispatch(fetchUserStart(rangeValue));
  }, [dispatch, rangeValue]);

  const renderUser = useCallback(() => {
    const { name, loading, error } = selectorUser;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error...</div>;
    }

    if (name?.length) {
      return <div>{name}</div>;
    }

    return null;
  }, [selectorUser]);

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
            <Link
              to="https://www.modohockey.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              dolor sit amet
            </Link>{' '}
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
            Some hooks are not being showcased, so take a look at them
            yourself...
          </li>
        </ul>
      </aside>
      <Portal>
        <section>
          <Container>
            <div style={{ paddingTop: '20px' }}>
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
            <div style={{ paddingTop: '20px' }}>
              <b>Showcase of cancellation</b>
              <div style={{ fontSize: '14px' }}>
                Drag the range slider below and look at your network tab.
              </div>
              <div style={{ fontSize: '14px' }}>
                It cancels pending requests if a new one appears.
              </div>
            </div>
            <div style={{ paddingBottom: '20px' }}>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={rangeValue}
                onChange={({ target }) => setRangeValue(target.value)}
              />
              {renderUser()}
            </div>
          </Container>
        </section>
      </Portal>
    </>
  );
};

export default Home;
