import React, { useState, useEffect } from 'react';

import SectionHeader from 'components/SectionHeader';
import InputRange from 'components/InputRange';
import Card from 'components/Card';

import {
  MAX_COLUMNS_ON_DONTMISS_SLIDER,
  MAX_INDEX_ON_SLIDER,
  MIN_INDEX_ON_SLIDER,
} from 'utils/const';

import dontMissSrc1 from 'sources/images/dont-miss-1.png';
import dontMissSrc2 from 'sources/images/dont-miss-2.png';
import { ReactComponent as MobileRightArrowIcon } from 'sources/icons/mobile-arrow-icon.svg';

import styles from './styles.module.scss';
import Slider from 'react-slick';
import SamplePrevArrow from 'components/SliderArrows/Prev';
import SampleNextArrow from 'components/SliderArrows/Next';

const moveSlider = (index: number) => {
  const slider = document.getElementById('dontMissSlider');
  const isMobile = document.documentElement.clientWidth < 769;

  if (slider) {
    switch (index) {
      case 1:
        slider.style.left = '0';
        break;
      case 2:
        isMobile
          ? (slider.style.left = `-${document.documentElement.clientWidth}px`)
          : (slider.style.left = '-670px');
        break;
      case 3:
        isMobile ? (slider.style.left = '-640px') : (slider.style.left = '-1340px');
        break;
      case 4:
        isMobile ? (slider.style.left = '-640px') : (slider.style.left = '-2010px');
        break;
      case 5:
        isMobile ? (slider.style.left = '-640px') : (slider.style.left = '-2680px');
        break;
      case 6:
        isMobile ? (slider.style.left = '-640px') : (slider.style.left = '-3350px');
        break;
    }
  }
};

const DontMiss: React.FC = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const [maxColumns, setMaxColumns] = useState(MAX_COLUMNS_ON_DONTMISS_SLIDER);
  const [widthThumb, setWidthThumb] = useState<'middle' | 'big'>('middle');

  useEffect(() => {
    if (document.documentElement.clientWidth < 769) {
      setMaxColumns(2);
      setWidthThumb('big');
    }
  }, []);

  const onChangeSlider = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    // moveSlider(Number(currentTarget.value));
    // setCurrIdx(Number(currentTarget.value));
    sliderDontMiss.slickGoTo(currentTarget.value);
  };

  const handlerSliderRightArrow = () => {
    if (currIdx === MAX_INDEX_ON_SLIDER) return;

    setCurrIdx(currIdx + 1);
    moveSlider(currIdx + 1);
  };

  const handlerSliderLeftArrow = () => {
    if (currIdx === MIN_INDEX_ON_SLIDER) return;

    setCurrIdx(currIdx - 1);
    moveSlider(currIdx - 1);
  };

  const settings = {
    variableWidth: true,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  let sliderDontMiss: any;

  return (
    <section className={styles.dontMiss}>
      {/* <SectionHeader
        title="Don't Miss"
        controls={true}
        handlerLeftArrow={handlerSliderLeftArrow}
        handlerRightArrow={handlerSliderRightArrow}
      /> */}

<h2 className={styles.title}>
        Don't miss<MobileRightArrowIcon className={styles.mobileArrow} />
      </h2>


      <Slider className={styles.slider} ref={(slider) => (sliderDontMiss = slider)} {...settings}>
      <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
          <Card size="middle" imageSrc={dontMissSrc2} text="Unisex" />
          <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
          <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
          <Card size="middle" imageSrc={dontMissSrc2} text="Unisex" />
          <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
      </Slider>

      {/* <div id="dontMissSlider" className={styles.content}>
        <div className={styles.column}>
          <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
          <Card size="middle" imageSrc={dontMissSrc2} text="Unisex" />
          <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
        </div>

        <div className={styles.column}>
          <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
          <Card size="middle" imageSrc={dontMissSrc2} text="Unisex" />
          <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
        </div>
      </div> */}

      <InputRange
        max={1}
        onChange={onChangeSlider}
        sizeThumb={widthThumb}
        value={currIdx}
      />
    </section>
  );
};

export default DontMiss;
