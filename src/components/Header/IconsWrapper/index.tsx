import React from 'react';

import { ReactComponent as SearchIcon } from 'sources/icons/search-icon.svg';
import { ReactComponent as FavoriteIcon } from 'sources/icons/favorite-icon.svg';
import { ReactComponent as BasketIcon } from 'sources/icons/basket-icon.svg';
import { ReactComponent as UserIcon } from 'sources/icons/user-icon.svg';
import { ReactComponent as InfoIcon } from 'sources/icons/info-icon.svg';

import styles from './styles.module.scss';

const IconsWrapper: React.FC = () => {
  return <ul className={styles.icons}>
    <li><SearchIcon /></li>
    <li><FavoriteIcon /></li>
    <li><BasketIcon /></li>
    <li><UserIcon /></li>
    <li><InfoIcon /></li>
  </ul>;
};

export default IconsWrapper;
