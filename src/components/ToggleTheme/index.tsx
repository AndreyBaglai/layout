import React from 'react';

import { ReactComponent as MoonIcon } from 'sources/icons/moon-icon.svg';
import { ReactComponent as SunIcon } from 'sources/icons/sun-icon.svg';

import styles from './styles.module.scss';

const ToggleTheme: React.FC = () => {
    const onClick = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <div onClick={onClick} className={styles.toggle}>
      <MoonIcon />
      <SunIcon />
    </div>
  );
};

export default ToggleTheme;
