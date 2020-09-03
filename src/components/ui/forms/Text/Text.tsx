import React from 'react';
import { ValidationRules, UseFormMethods } from 'react-hook-form';

import styles from './Text.module.scss';

interface TextProps {
  name: string;
  placeholder?: string;
  ariaLabel?: string;
  register: UseFormMethods['register'];
  validation?: ValidationRules;
}

const Text = ({
  name,
  placeholder,
  ariaLabel,
  register,
  validation = {}
}: TextProps) => {
  return (
    <input
      type="text"
      ref={register({ ...validation })}
      autoComplete="off"
      name={name}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className={styles.root}
    />
  );
};

export default Text;
