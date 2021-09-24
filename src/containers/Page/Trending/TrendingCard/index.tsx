import React from 'react';

import { ReactComponent as FavoriteIcon } from 'sources/icons/favorite-icon.svg';

import styles from './styles.module.scss';

interface IProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  price: string;
  subprice?: string;
  controls: boolean;
  isNew: boolean;
}

const TrendingCard: React.FC<IProps> = ({
  subtitle,
  title,
  price,
  imageSrc,
  subprice,
  controls,
  isNew,
}) => {
  return <div className={styles.card}>
    <div className={styles.img} style={{ backgroundImage: `url(${imageSrc}` }}>
      <FavoriteIcon className={styles.favorite} />
      {isNew ? <div className={styles.tagNew}>New</div> : <div className={styles.tag}>-50%</div>}
      {controls && <ul className={styles.controls}><li></li><li></li><li></li><li></li></ul>}
    </div>

    <div className={styles.description}>
      <div className={styles.top}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{price}</div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.subtitle}>{subtitle || ''}</div>
        <div className={styles.subprice}>{subprice || ''}</div>
      </div>
    </div>
  </div>;
};

export default TrendingCard;
