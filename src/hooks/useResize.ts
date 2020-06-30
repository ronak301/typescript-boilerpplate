import { useMemo } from 'react';
import { debounce } from 'lodash';

import { useEventListener } from 'hooks';

export const useResize = (callback: (event: Event) => void, wait = 250) => {
  const handleResize = useMemo(
    () =>
      wait !== 0
        ? debounce((event: Event) => callback(event), wait)
        : (event: Event) => callback(event),
    [wait, callback]
  );

  useEventListener({
    type: 'resize',
    listener: handleResize,
    options: { passive: true }
  });
};
