import React, { useState } from 'react';

import SectionHeader from 'components/SectionHeader';
import InputRange from 'components/InputRange';
import Card from 'components/Card';

import {
  MAX_SLIDE_ON_CATEGORIES_SLIDER,
  MIN_INDEX_ON_SLIDER,
} from 'utils/const';

import categoriesSrc1 from 'sources/images/categories-1.png';
import categoriesSrc2 from 'sources/images/categories-2.png';
import categoriesSrc3 from 'sources/images/categories-3.png';

import styles from './styles.module.scss';

const moveSlider = (index: number) => {
  const slider = document.getElementById('categoriesSlider');
  const bigImg = document.getElementById('bigImg');

  const isTablet = document.documentElement.clientWidth < 1000;
  const isMobile = document.documentElement.clientWidth < 769;

  if (slider && bigImg) {
    switch (index) {
      case 1:
        slider.style.left = '0';
        bigImg.style.left = '0';
        break;
      case 2:
        if (isTablet) {
          slider.style.left = '-693px';

          if (isMobile) {
            bigImg.style.left = '579px';
            slider.style.left = '-580px';
          }
        } else {
          slider.style.left = '-892px';
        }
        break;
    }
  }
};

const Categories: React.FC = () => {
  const [currIdx, setCurrIdx] = useState(MIN_INDEX_ON_SLIDER);

  const onChangeSlider = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    moveSlider(Number(currentTarget.value));
    setCurrIdx(Number(currentTarget.value));
  };

  const handlerSliderRightArrow = () => {
    if (currIdx === MIN_INDEX_ON_SLIDER) return;

    setCurrIdx(currIdx - 1);
    moveSlider(currIdx - 1);
  };

  const handlerSliderLeftArrow = () => {
    if (currIdx === MAX_SLIDE_ON_CATEGORIES_SLIDER) return;

    setCurrIdx(currIdx + 1);
    moveSlider(currIdx + 1);
  };

  return (
    <section className={styles.categories}>
      <SectionHeader
        title="Categories"
        controls={true}
        handlerLeftArrow={handlerSliderLeftArrow}
        handlerRightArrow={handlerSliderRightArrow}
      />

      <div id="categoriesSlider" className={styles.content}>
        <div id="bigImg" className={styles.bigImg}>
          <Card size="big" imageSrc={categoriesSrc1} text="Women" />
        </div>

        <div className={styles.itemsWrapper}>
          <div className={styles.items}>
            <Card size="small" imageSrc={categoriesSrc2} text="Kids" />
            <Card size="small" imageSrc={categoriesSrc3} text="Men" />
          </div>
          <div className={styles.items}>
            <Card size="small" imageSrc={categoriesSrc3} text="Men" />
            <Card size="small" imageSrc={categoriesSrc2} text="Kids" />
          </div>
        </div>
      </div>

      <InputRange
        max={MAX_SLIDE_ON_CATEGORIES_SLIDER}
        onChange={onChangeSlider}
        sizeThumb="big"
        value={currIdx}
      />
    </section>
  );
};

export default Categories;
