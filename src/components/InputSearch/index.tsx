import React from 'react';

import { ReactComponent as SearchIcon } from 'sources/icons/search-icon.svg';
import { ReactComponent as CloseIcon } from 'sources/icons/close-icon.svg';

import styles from './styles.module.scss';

interface IProps {
  onCloseInputSearch: () => void;
}

const InputSearch: React.FC<IProps> = ({ onCloseInputSearch }) => {
  return (
    <div id="inputSearch" className={styles.wrapper}>
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

      <CloseIcon onClick={onCloseInputSearch} className={styles.closeField} />
    </div>
  );
};

export default InputSearch;
