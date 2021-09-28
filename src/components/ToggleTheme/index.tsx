import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'stores';

import { ReactComponent as MoonIcon } from 'sources/icons/moon-icon.svg';
import { ReactComponent as SunIcon } from 'sources/icons/sun-icon.svg';

import styles from './styles.module.scss';

const ToggleTheme: React.FC = observer(() => {
  const { themeStore } = useStore();
  const { theme } = themeStore;

  useEffect(() => {
    const themeFromLS = localStorage.getItem('theme');
    themeFromLS && themeStore.changeTheme(themeFromLS);
    
    if (themeFromLS === 'dark') {
      document.body.classList.add('dark');

      const circles: HTMLElement[] = Array.from(
        document.querySelectorAll('span[data-circle="circle"]')
      );
      circles.forEach((circle: HTMLElement) => (circle.style.left = '8px'));
    }
  }, [theme]);

  const onToggleTheme = () => {
    const circles: HTMLElement[] = Array.from(
      document.querySelectorAll('span[data-circle="circle"]')
    );

    if (theme === 'light') {
      document.body.classList.toggle('dark');
      themeStore.changeTheme('dark');

      localStorage.setItem('theme', 'dark');
      circles.forEach((circle: HTMLElement) => (circle.style.left = '8px'));
    } else {
      document.body.classList.toggle('dark');
      themeStore.changeTheme('light');

      localStorage.setItem('theme', 'light');
      circles.forEach((circle: HTMLElement) => (circle.style.left = '49px'));
    }
  };

  return (
    <div onClick={onToggleTheme} className={styles.toggle}>
      <span data-circle="circle" className={styles.circle}></span>
      <MoonIcon className={styles.moon} />
      <SunIcon className={styles.sun} />
    </div>
  );
});

export default ToggleTheme;
