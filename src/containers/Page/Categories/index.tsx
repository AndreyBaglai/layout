import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Slider from 'react-slick';

import InputRange from 'components/InputRange';
import Card from 'components/Card';
import SampleNextArrow from 'components/SliderArrows/Next';
import SamplePrevArrow from 'components/SliderArrows/Prev';

import { ReactComponent as MobileRightArrowIcon } from 'sources/icons/mobile-arrow-icon.svg';

import categoriesSrc1 from 'sources/images/categories-1.png';
import categoriesSrc2 from 'sources/images/categories-2.png';
import categoriesSrc3 from 'sources/images/categories-3.png';

import { CATEGORIES_SLIDER_MOBILE_WIDTH, CLIENT_WIDTH } from 'utils/const';

import styles from './styles.module.scss';

let sliderCategories: Slider | null;

const Categories: React.FC = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const [maxInputScroll, setMaxInputScroll] = useState(1);

  useEffect(() => {
    if (CLIENT_WIDTH < CATEGORIES_SLIDER_MOBILE_WIDTH) {
      setMaxInputScroll(2);
    }
  }, []);

  const onChangeSlider = useCallback(
    ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
      sliderCategories?.slickGoTo(Number(currentTarget.value));
    },
    [currIdx],
  );

  const settingsCategoriesSlider = useMemo(
    () => ({
      rows: 2,
      variableWidth: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      accessibility: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      beforeChange: (_: any, nextIdx: number) => setCurrIdx(nextIdx),
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
      ],
    }),
    [currIdx],
  );

  return (
    <section className={styles.categories}>
      <h2 className={styles.title}>
        Categories
        <MobileRightArrowIcon className={styles.mobileArrow} />
      </h2>

      <Slider ref={(slider: Slider) => (sliderCategories = slider)} {...settingsCategoriesSlider}>
        <div id="bigImg" className={styles.bigImg}>
          <Card size="big" imageSrc={categoriesSrc1} text="Women" />
        </div>
        <div></div>

        <Card size="small" imageSrc={categoriesSrc2} text="Kids" />
        <Card size="small" imageSrc={categoriesSrc3} text="Men" />
        <Card size="small" imageSrc={categoriesSrc3} text="Men" />
        <Card size="small" imageSrc={categoriesSrc2} text="Kids" />
      </Slider>

      <InputRange max={maxInputScroll} onChange={onChangeSlider} sizeThumb="big" value={currIdx} />
    </section>
  );
};

export default Categories;
