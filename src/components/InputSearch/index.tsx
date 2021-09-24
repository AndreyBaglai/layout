import React from 'react';

import { ReactComponent as SearchIcon } from 'sources/icons/search-icon.svg';
import { ReactComponent as CloseIcon } from 'sources/icons/close-icon.svg';

import styles from './styles.module.scss';

const InputSearch: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <SearchIcon className={styles.searchIcon} />
        <input
          className={styles.search}
          type="text"
          placeholder="Search among millions of products"
        />
      </div>
      <h4 className={styles.reset}>Reset Search</h4>
      <p className={styles.option}>White Thirt <CloseIcon /></p>
      <p className={styles.option}>Overhit with belt <CloseIcon /></p>
      <CloseIcon className={styles.closeField} />
    </div>
  );
};

export default InputSearch;
