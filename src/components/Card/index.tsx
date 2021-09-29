import React from 'react';
import classNames from 'classnames';

import Button from 'components/Button';

import styles from './styles.module.scss';

interface IProps {
  size: 'small' | 'middle' | 'big';
  imageSrc: string;
  text: string;
}

const Card: React.FC<IProps> = ({ text, size, imageSrc }) => {
  return (
    <div
      className={classNames(styles.card, styles[size])}
      style={{ backgroundImage: `url(${imageSrc}` }}>
      <h3 className={styles.text}>{text}</h3>
      <Button>Shop</Button>
    </div>
  );
};

export default Card;
