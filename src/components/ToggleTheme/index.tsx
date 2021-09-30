import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'stores';

import { ReactComponent as MoonIcon } from 'sources/icons/moon-icon.svg';
import { ReactComponent as SunIcon } from 'sources/icons/sun-icon.svg';

import styles from './styles.module.scss';

const getToggleIcons = (): HTMLElement[] =>
  Array.from(document.querySelectorAll('span[data-icon="icon"]'));

const ToggleTheme: React.FC = observer(() => {
  const { themeStore } = useStore();
  const { theme } = themeStore;

  useEffect(() => {
    const themeFromLS = localStorage.getItem('theme');
    themeFromLS && themeStore.changeTheme(themeFromLS);

    if (themeFromLS === 'dark') {
      document.body.classList.add('dark');

      const toggleIcons: HTMLElement[] = getToggleIcons();
      toggleIcons.forEach((icon: HTMLElement) => (icon.style.left = '8px'));
    }
  }, [theme]);

  const onToggleTheme = () => {
    const toggleIcons: HTMLElement[] = getToggleIcons();
    document.body.classList.toggle('dark');
    
    if (theme === 'light') {
      themeStore.changeTheme('dark');
      localStorage.setItem('theme', 'dark');
      toggleIcons.forEach((icon: HTMLElement) => (icon.style.left = '8px'));
    } else {
      themeStore.changeTheme('light');
      localStorage.setItem('theme', 'light');
      toggleIcons.forEach((icon: HTMLElement) => (icon.style.left = '49px'));
    }
  };

  return (
    <div onClick={onToggleTheme} className={styles.toggle}>
      <span data-icon="icon" className={styles.icon}></span>
      <MoonIcon className={styles.moon} />
      <SunIcon className={styles.sun} />
    </div>
  );
});

export default ToggleTheme;
