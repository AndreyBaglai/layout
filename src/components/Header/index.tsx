import Navigation from 'components/Navigation';

import ToggleTheme from 'components/ToggleTheme';
import React from 'react';
import IconsWrapper from './IconsWrapper';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  return <header className={styles.header}>
    <ToggleTheme />
    <Navigation />
    <IconsWrapper />
  </header>;
};

export default Header;