import React from 'react';

import MobileMenu from 'components/MobileMenu';
import Navigation from 'components/Navigation';
import InputSearch from 'components/InputSearch';

import ToggleTheme from 'components/ToggleTheme';
import IconsWrapper from './IconsWrapper';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const onOpenMobileMenu = () => {
    const menu = document.getElementById('mobileMenu') as HTMLElement;

    if (menu) menu.style.left = '0';
  };

  const onCloseMobileMenu = () => {
    const menu = document.getElementById('mobileMenu') as HTMLElement;

    if (menu) menu.style.left = '-1000px';
  };

  const onOpenInputSearch = () => {
    const input = document.getElementById('inputSearch') as HTMLElement;

    if (input) input.style.top = '0';
  };

  const onCloseInputSearch = () => {
    const input = document.getElementById('inputSearch') as HTMLElement;

    if (input) input.style.top = '-1000px';
  };

  return (
    <header className={styles.header}>
      <InputSearch onCloseInputSearch={onCloseInputSearch} />
      <ToggleTheme />
      <Navigation />
      <IconsWrapper onOpenMobileMenu={onOpenMobileMenu} onOpenInputSearch={onOpenInputSearch} />
      <MobileMenu onCloseMobileMenu={onCloseMobileMenu} />
    </header>
  );
};

export default Header;
