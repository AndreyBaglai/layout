import React, { useState } from 'react';

import SectionHeader from 'components/SectionHeader';
import InputRange from 'components/InputRange';
import TrendingCard from './TrendingCard';

import trendingSrc1 from 'sources/images/trending-1.png';
import trendingSrc2 from 'sources/images/trending-2.png';
import trendingSrc3 from 'sources/images/trending-3.png';

import styles from './styles.module.scss';

const Trending: React.FC = () => {
  const [currIdx, setCurrIdx] = useState(1);

  const onChangeImage = () => {
  
  }

  return (
    <section className={styles.trending}>
      <SectionHeader title="Trending Now" controls={true} />

      <div className={styles.content}>
        <TrendingCard
          imageSrc={trendingSrc1}
          title="Overhit with belt"
          subtitle="Women's outerwear"
          price="€23.99"
          subprice="€55"
          controls={true}
          isNew={false}
        />
        <TrendingCard
          imageSrc={trendingSrc2}
          title="Dress"
          price="€9.99"
          controls={true}
          isNew={true}
        />
        <TrendingCard
          imageSrc={trendingSrc3}
          title="Top"
          price="€16"
          subtitle="Women's underwear"
          controls={false}
          isNew={true}
        />
        <TrendingCard
          imageSrc={trendingSrc1}
          title="Overhit with belt"
          subtitle="Women's outerwear"
          price="€23.99"
          subprice="€55"
          controls={true}
          isNew={false}
        />
        <TrendingCard
          imageSrc={trendingSrc2}
          title="Dress"
          price="€9.99"
          controls={true}
          isNew={true}
        />
        <TrendingCard
          imageSrc={trendingSrc3}
          title="Top"
          price="€16"
          subtitle="Women's underwear"
          controls={false}
          isNew={true}
        />
      </div>
      
      <InputRange max={6} onChange={onChangeImage} />
    </section>
  );
};

export default Trending;
