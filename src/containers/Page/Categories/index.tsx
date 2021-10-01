import React, { useEffect, useState } from 'react';

import InputRange from 'components/InputRange';
import Card from 'components/Card';

import categoriesSrc1 from 'sources/images/categories-1.png';
import categoriesSrc2 from 'sources/images/categories-2.png';
import categoriesSrc3 from 'sources/images/categories-3.png';
import { ReactComponent as MobileRightArrowIcon } from 'sources/icons/mobile-arrow-icon.svg';

import styles from './styles.module.scss';
import SampleNextArrow from 'components/SliderArrows/Next';
import SamplePrevArrow from 'components/SliderArrows/Prev';
import Slider from 'react-slick';

const Categories: React.FC = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const [maxInput, setMaxInput] = useState(1);
  
  useEffect(() => {
    if (document.documentElement.clientWidth < 769) {
      setMaxInput(2);
    }
  }, []);

  const onChangeSlider = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    sliderCategories.slickGoTo(currentTarget.value);
  };

  let sliderCategories: any;

  const settings = {
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
    beforeChange: (_: any, next: any) => setCurrIdx(next),
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
  };

  return (
    <section className={styles.categories}>
      <h2 className={styles.title}>
        Categories
        <MobileRightArrowIcon className={styles.mobileArrow} />
      </h2>

      <Slider ref={(slider) => (sliderCategories = slider)} {...settings}>
        <div id="bigImg" className={styles.bigImg}>
          <Card size="big" imageSrc={categoriesSrc1} text="Women" />
        </div>
        <div></div>

        <Card size="small" imageSrc={categoriesSrc2} text="Kids" />
        <Card size="small" imageSrc={categoriesSrc3} text="Men" />
        <Card size="small" imageSrc={categoriesSrc3} text="Men" />
        <Card size="small" imageSrc={categoriesSrc2} text="Kids" />
      </Slider>

      <InputRange max={maxInput} onChange={onChangeSlider} sizeThumb="big" value={currIdx} />
    </section>
  );
};

export default Categories;
