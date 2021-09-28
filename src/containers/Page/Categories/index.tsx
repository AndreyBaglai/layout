import React from 'react';

import SectionHeader from 'components/SectionHeader';
import InputRange from 'components/InputRange';

import categoriesSrc1 from 'sources/images/categories-1.png';
import categoriesSrc2 from 'sources/images/categories-2.png';
import categoriesSrc3 from 'sources/images/categories-3.png';

import styles from './styles.module.scss';
import Card from 'components/Card';

const Categories: React.FC = () => {
  return (
    <section className={styles.categories}>
      <SectionHeader title="Categories" controls={true} />

      <div className={styles.content}>
        <div className={styles.mainImg}>
          <Card size="big" imageSrc={categoriesSrc1} text="Women" />
        </div>

        <div className={styles.itemsWrapper}>
          <div className={styles.items}>
            <Card size="small" imageSrc={categoriesSrc2} text="Kids" />
            <Card size="small" imageSrc={categoriesSrc3} text="Men" />
          </div>
          <div className={styles.items}>
            <Card size="small" imageSrc={categoriesSrc2} text="Kids" />
            <Card size="small" imageSrc={categoriesSrc3} text="Men" />
          </div>
        </div>
      </div>

      <InputRange max={2} onChange={() => {}} sizeThumb="big" />
    </section>
  );
};

export default Categories;
