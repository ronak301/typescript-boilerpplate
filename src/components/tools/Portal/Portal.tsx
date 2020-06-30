import { ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  readonly children: ReactNode;
}

const Portal = ({ children }: Props) => {
  const portalSelector = useMemo(
    () => document.querySelector('#portal') ?? null,
    []
  );

  if (children && portalSelector) {
    return createPortal(children, portalSelector);
  }

  return null;
};

export default Portal;
