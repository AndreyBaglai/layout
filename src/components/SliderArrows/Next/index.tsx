import React from 'react';

import { ReactComponent as NextArrowIcon } from 'sources/icons/right-arrow-icon.svg';

import styles from './styles.module.scss';

interface IProps {
  style?: any;
  onClick?: any;
}

const SampleNextArrow: React.FC<IProps> = ({ style, onClick }) => {
  return (
    <NextArrowIcon className={styles.next} style={style} onClick={onClick} />
  );
}

export default SampleNextArrow;