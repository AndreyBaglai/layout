import React from 'react';

import styles from './styles.module.scss';

const Button: React.FC = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
