import { useCallback, RefObject } from 'react';

import { useEventListener } from 'hooks';

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void
) => {
  const handleClick = useCallback(
    (event) => {
      if (!ref.current?.contains(event.target as Node)) {
        callback(event);
      }
    },
    [callback, ref]
  );

  useEventListener({
    type: 'click',
    listener: handleClick
  });
};
