import React, { useState } from 'react';

import SectionHeader from 'components/SectionHeader';
import InputRange from 'components/InputRange';
import TrendingCard from './TrendingCard';

import trendingSrc1 from 'sources/images/trending-1.png';
import trendingSrc2 from 'sources/images/trending-2.png';
import trendingSrc3 from 'sources/images/trending-3.png';

import styles from './styles.module.scss';

const moveSlider = (n: number) => {
  const slider = document.getElementById('trendingSlider');
  const isMobile = document.documentElement.clientWidth < 600;

  if (slider) {
    switch (n) {
      case 1:
        slider.style.left = '0';
        break;
      case 2:
        isMobile ? slider.style.left = '-320px' :
        slider.style.left = '-447px';
        break;
      case 3:
      isMobile ? slider.style.left = '-640px' :
        slider.style.left = '-894px';
        break;
      case 4:
      isMobile ? slider.style.left = '-960px' :
        slider.style.left = '-1341px';
        break;
      case 5:
      isMobile ? slider.style.left = '-1280px' :
        slider.style.left = '-1788px';
        break;
      case 6:
      isMobile ? slider.style.left = '-1600px' :
        slider.style.left = '-2235px';
        break;
    }
  }
};

const Trending: React.FC = () => {
  const [currIdx, setCurrIdx] = useState(1);

  const onChangeImage = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    moveSlider(Number(currentTarget.value));
    setCurrIdx(Number(currentTarget.value));
  };

  const handleSliderRightArrow = () => {
    if (currIdx === 1) return;

    setCurrIdx(currIdx - 1);
    moveSlider(currIdx - 1);
  }

  const handleSliderLeftArrow = () => {
    if (currIdx === 6) return;

    setCurrIdx(currIdx + 1);
    moveSlider(currIdx + 1);
  }

  return (
    <section className={styles.trending}>
      <SectionHeader title="Trending Now" controls={true} handlerLeftArrow={handleSliderLeftArrow} handlerRightArrow={handleSliderRightArrow} />

      <div id="trendingSlider" className={styles.content}>
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

      <InputRange max={6} onChange={onChangeImage} sizeThumb="small" value={currIdx} />
    </section>
  );
};

export default Trending;
