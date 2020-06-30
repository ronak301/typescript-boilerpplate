import React, { useState } from 'react';

import styles from './Text.module.scss';

// Recommended library - https://react-hook-form.com/

const Text = () => {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      name="text"
      placeholder="text"
      aria-label="text"
      className={styles.root}
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  );
};

export default Text;
