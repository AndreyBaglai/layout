import React from 'react';

import MobileMenu from 'components/MobileMenu';
import Navigation from 'components/Navigation';

import ToggleTheme from 'components/ToggleTheme';
import IconsWrapper from './IconsWrapper';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  return <header className={styles.header}>
    <ToggleTheme />
    <Navigation />
    <IconsWrapper />
    <MobileMenu />
  </header>;
};

export default Header;