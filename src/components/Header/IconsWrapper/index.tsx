import React from 'react';

import { ReactComponent as SearchIcon } from 'sources/icons/search-icon.svg';
import { ReactComponent as FavoriteIcon } from 'sources/icons/favorite-icon.svg';
import { ReactComponent as BasketIcon } from 'sources/icons/basket-icon.svg';
import { ReactComponent as UserIcon } from 'sources/icons/user-icon.svg';
import { ReactComponent as InfoIcon } from 'sources/icons/info-icon.svg';
import { ReactComponent as BurgerIcon } from 'sources/icons/burger-icon.svg';

import styles from './styles.module.scss';

const IconsWrapper: React.FC = () => {
  return <ul className={styles.icons}>
    <li><SearchIcon /></li>
    <li className={styles.favoriteIcon}><FavoriteIcon /></li>
    <li className={styles.basketIcon}><BasketIcon /></li>
    <li className={styles.userIcon}><UserIcon /></li>
    <li className={styles.infoIcon}><InfoIcon /></li>
    <li><BurgerIcon className={styles.burgerIcon} /></li>
  </ul>;
};

export default IconsWrapper;
