import React from 'react';

import styles from './styles.module.scss';

const Link: React.FC = ({children}) => {
  return <li className={styles.link}><a href="#">{children}</a></li>;
};

export default Link;