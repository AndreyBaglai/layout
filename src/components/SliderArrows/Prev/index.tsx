import React from 'react';

import { ReactComponent as PrevArrowIcon } from 'sources/icons/left-arrow-icon.svg';

import styles from './styles.module.scss'

interface IProps {
  style?: any;
  onClick?: any;
}

const SamplePrevArrow: React.FC<IProps> = ({ style, onClick }) => {
  return (
    <PrevArrowIcon className={styles.prev} style={style} onClick={onClick} />
  );
}

export default SamplePrevArrow;