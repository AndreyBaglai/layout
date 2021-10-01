import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Slider from 'react-slick';

import InputRange from 'components/InputRange';
import Card from 'components/Card';
import SamplePrevArrow from 'components/SliderArrows/Prev';
import SampleNextArrow from 'components/SliderArrows/Next';

import { ReactComponent as MobileRightArrowIcon } from 'sources/icons/mobile-arrow-icon.svg';

import dontMissSrc1 from 'sources/images/dont-miss-1.png';
import dontMissSrc2 from 'sources/images/dont-miss-2.png';

import {
  CLIENT_WIDTH,
  DONTMISS_SLIDER_MOBILE_WIDTH,
  DONTMISS_SLIDER_TABLET_WIDTH,
} from 'utils/const';

import styles from './styles.module.scss';

let sliderDontMiss: Slider | null;

const DontMiss: React.FC = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const [widthThumb, setWidthThumb] = useState<'middle' | 'big'>('middle');
  const [maxInputScroll, setMaxInputScroll] = useState(3);

  useEffect(() => {
    if (CLIENT_WIDTH < DONTMISS_SLIDER_TABLET_WIDTH) {
      setMaxInputScroll(4);
      setWidthThumb('big');
    }
    if (CLIENT_WIDTH < DONTMISS_SLIDER_MOBILE_WIDTH) {
      setMaxInputScroll(5);
      setWidthThumb('big');
    }
  }, []);

  const onChangeSlider = useCallback(
    ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
      sliderDontMiss?.slickGoTo(Number(currentTarget.value));
    },
    [currIdx],
  );

  const settingsDontMissSlider = useMemo(
    () => ({
      variableWidth: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      accessibility: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      beforeChange: (_: any, nextIdx: number) => setCurrIdx(nextIdx),
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToScroll: 1,
            initialSlide: 0,
            slidesToShow: 1,
          },
        },
      ],
    }),
    [currIdx],
  );

  return (
    <section className={styles.dontMiss}>
      <h2 className={styles.title}>
        Don't miss
        <MobileRightArrowIcon className={styles.mobileArrow} />
      </h2>

      <Slider ref={(slider: Slider) => (sliderDontMiss = slider)} {...settingsDontMissSlider}>
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
        <Card size="middle" imageSrc={dontMissSrc2} text="Unisex" />
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
        <Card size="middle" imageSrc={dontMissSrc2} text="Unisex" />
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
      </Slider>

      <InputRange
        max={maxInputScroll}
        onChange={onChangeSlider}
        sizeThumb={widthThumb}
        value={currIdx}
      />
    </section>
  );
};

export default DontMiss;
