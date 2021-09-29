import React from 'react';

import { ReactComponent as CloseIcon } from 'sources/icons/close-icon.svg';

import styles from './styles.module.scss';

interface IProps {
  onCloseMobileMenu: () => void;
}

const MobileMenu: React.FC<IProps> = ({ onCloseMobileMenu }) => {
  return (
    <div id="mobileMenu" className={styles.wrapper}>
      <CloseIcon className={styles.closeIcon} onClick={onCloseMobileMenu} />
      <ul className={styles.menu}>
        <li className={styles.active}>
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
          <a href="#">More</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
