import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  isActive?: boolean;
}

const Link: React.FC<IProps> = ({ isActive, children }) => {
  return (
    <li className={classNames(styles.link, { [styles.active]: isActive })}>
      <a href="#">{children}</a>
    </li>
  );
};

export default Link;
