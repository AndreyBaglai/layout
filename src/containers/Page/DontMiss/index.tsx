import React, { useState, useEffect } from 'react';

import InputRange from 'components/InputRange';
import Card from 'components/Card';

import dontMissSrc1 from 'sources/images/dont-miss-1.png';
import dontMissSrc2 from 'sources/images/dont-miss-2.png';
import { ReactComponent as MobileRightArrowIcon } from 'sources/icons/mobile-arrow-icon.svg';

import styles from './styles.module.scss';
import Slider from 'react-slick';
import SamplePrevArrow from 'components/SliderArrows/Prev';
import SampleNextArrow from 'components/SliderArrows/Next';

const DontMiss: React.FC = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const [maxInput, setMaxInput] = useState(3);
  const [widthThumb, setWidthThumb] = useState<'middle' | 'big'>('middle');

  useEffect(() => {
    if (document.documentElement.clientWidth < 1440) {
      setMaxInput(4);
      setWidthThumb('big');
    }
    if (document.documentElement.clientWidth < 960) {
      setMaxInput(5);
      setWidthThumb('big');
    }
  }, []);

  const onChangeSlider = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    sliderDontMiss.slickGoTo(currentTarget.value);
  };

  const settings = {
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
    beforeChange: (_: any, next: any) => setCurrIdx(next),
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
  };

  let sliderDontMiss: any;

  return (
    <section className={styles.dontMiss}>

      <h2 className={styles.title}>
        Don't miss
        <MobileRightArrowIcon className={styles.mobileArrow} />
      </h2>

      <Slider ref={(slider) => (sliderDontMiss = slider)} {...settings}>
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
        <Card size="middle" imageSrc={dontMissSrc2} text="Unisex" />
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
        <Card size="middle" imageSrc={dontMissSrc2} text="Unisex" />
        <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
      </Slider>

      <InputRange max={maxInput} onChange={onChangeSlider} sizeThumb={widthThumb} value={currIdx} />
    </section>
  );
};

export default DontMiss;
