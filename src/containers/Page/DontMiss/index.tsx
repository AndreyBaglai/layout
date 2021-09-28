import React, { useState } from 'react';

import SectionHeader from 'components/SectionHeader';
import InputRange from 'components/InputRange';
import Card from 'components/Card';

import dontMissSrc1 from 'sources/images/dont-miss-1.png';
import dontMissSrc2 from 'sources/images/dont-miss-2.png';

import styles from './styles.module.scss';

const moveSlider = (n: number) => {
  const slider = document.getElementById('dontMissSlider');
  const isMobile = document.documentElement.clientWidth < 600;

  if (slider) {
    switch (n) {
      case 1:
        slider.style.left = '0';
        break;
      case 2:
        isMobile ? slider.style.left = '-320px' :
        slider.style.left = '-670px';
        break;
      case 3:
      isMobile ? slider.style.left = '-640px' :
        slider.style.left = '-1340px';
        break;
    }
  }
};

const DontMiss: React.FC = () => {
  const [currIdx, setCurrIdx] = useState(1);

  const onChangeSlider = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    moveSlider(Number(currentTarget.value));
    setCurrIdx(Number(currentTarget.value));
  };

  const handlerSliderRightArrow = () => {
    if (currIdx === 1) return;

    setCurrIdx(currIdx - 1);
    moveSlider(currIdx - 1);
  }

  const handlerSliderLeftArrow = () => {
    if (currIdx === 6) return;

    setCurrIdx(currIdx + 1);
    moveSlider(currIdx + 1);
  }

  return (
    <section className={styles.dontMiss}>
      <SectionHeader title="Don't Miss" controls={true} handlerLeftArrow={handlerSliderLeftArrow} handlerRightArrow={handlerSliderRightArrow} />

      <div id="dontMissSlider" className={styles.content}>
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
        <Card size="middle" imageSrc={dontMissSrc2} text="Unisex" />
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
      </div>
      <InputRange max={3} onChange={onChangeSlider} sizeThumb="middle" value={currIdx} />
    </section>
  );
};

export default DontMiss;
