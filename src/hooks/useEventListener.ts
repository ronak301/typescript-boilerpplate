import { useRef, useEffect, RefObject } from 'react';

import { isSSR } from 'utils';

interface Props {
  readonly type: string;
  readonly listener: EventListener;
  readonly element?: RefObject<HTMLElement>;
  readonly options?: AddEventListenerOptions;
}

export const useEventListener = ({
  type,
  listener,
  element = isSSR ? undefined : (window as any),
  options
}: Props) => {
  const savedListener = useRef<EventListener>();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    const getElement = element?.current ?? (element as any);
    const eventListener = (event: Event) => savedListener?.current?.(event);
    getElement.addEventListener(type, eventListener, options);

    return () => getElement.removeEventListener(type, eventListener);
  }, [type, element, options]);
};
