import { useState, useCallback, useMemo } from 'react';
import { throttle } from 'lodash';

import { useEventListener } from 'hooks';
import { isSSR } from 'utils';

export const useScroll = (wait = 250) => {
  const [scroll, setScroll] = useState({
    y: isSSR ? 0 : window.pageYOffset,
    direction: ''
  });

  const scrollFunc = useCallback(() => {
    const { pageYOffset } = window;
    setScroll((prev) => ({
      y: pageYOffset,
      direction: prev.y > pageYOffset ? 'up' : 'down'
    }));
  }, []);

  const handleScroll = useMemo(
    () =>
      wait !== 0 ? throttle(() => scrollFunc(), wait) : () => scrollFunc(),
    [wait, scrollFunc]
  );

  useEventListener({
    type: 'scroll',
    listener: handleScroll,
    options: { passive: true }
  });

  return scroll;
};
