import React from 'react';

import SectionHeader from 'components/SectionHeader';
import InputRange from 'components/InputRange';
import Card from 'components/Card';

import dontMissSrc1 from 'sources/images/dont-miss-1.png';
import dontMissSrc2 from 'sources/images/dont-miss-2.png';

import styles from './styles.module.scss';

const DontMiss: React.FC = () => {
  return (
    <section className={styles.dontMiss}>
      <SectionHeader title="Don't Miss" controls={false} />
      <div className={styles.content}>
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
        <Card size="middle" imageSrc={dontMissSrc2} text="Unisex" />
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
      </div>
      <InputRange max={2} onChange={() => {}} sizeThumb="middle" />
    </section>
  );
};

export default DontMiss;
