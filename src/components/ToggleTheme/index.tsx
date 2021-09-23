import React from 'react';

import { ReactComponent as MoonIcon } from 'sources/icons/moon-icon.svg';
import { ReactComponent as SunIcon } from 'sources/icons/sun-icon.svg';

import styles from './styles.module.scss';

const ToggleTheme: React.FC = () => {
  return (
    <div className={styles.toggle}>
      <MoonIcon />
      <SunIcon />
    </div>
  );
};

export default ToggleTheme;
