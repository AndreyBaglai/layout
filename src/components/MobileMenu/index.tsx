import React from 'react';

import { ReactComponent as MoreIcon } from 'sources/icons/nav-more-icon.svg';
import { ReactComponent as CloseIcon } from 'sources/icons/close-icon.svg';

import styles from './styles.module.scss';

const MobileMenu = () => {
  return (
    <div className={styles.wrapper}>
      <CloseIcon className={styles.closeIcon} />
      <ul className={styles.menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">Kids</a>
        </li>
        <li>
          <a href="#">Sale</a>
        </li>
        <li>
          <a href="#">More <MoreIcon /></a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
