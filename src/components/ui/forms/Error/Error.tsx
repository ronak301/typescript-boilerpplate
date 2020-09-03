import React from 'react';
import { UseFormMethods } from 'react-hook-form';

import styles from './Error.module.scss';

interface ErrorProps {
  error?: UseFormMethods['errors'];
  message: string;
}

const Error = ({ error, message }: ErrorProps) => {
  if (error && message) {
    return <div className={styles.root}>{message}</div>;
  }

  return null;
};

export default Error;
