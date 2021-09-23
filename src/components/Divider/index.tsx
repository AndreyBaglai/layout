import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  text: string;
}

const Divider: React.FC<IProps> = ({ text }) => {
  return <div className={styles.divider}>{text}</div>;
};

export default Divider