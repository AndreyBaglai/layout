import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import InputRange from 'components/InputRange';
import TrendingCard from './TrendingCard';
import SampleNextArrow from 'components/SliderArrows/Next';
import SamplePrevArrow from 'components/SliderArrows/Prev';

import { ReactComponent as MobileRightArrowIcon } from 'sources/icons/mobile-arrow-icon.svg';
import trendingSrc1 from 'sources/images/trending-1.png';
import trendingSrc2 from 'sources/images/trending-2.png';
import trendingSrc3 from 'sources/images/trending-3.png';

import styles from './styles.module.scss';

const Trending: React.FC = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const [maxInput, setMaxInput] = useState(3);

  useEffect(() => {
    if (document.documentElement.clientWidth < 1200) {
      setMaxInput(4);
    }
    if (document.documentElement.clientWidth < 620) {
      setMaxInput(5);
    }
  }, []);

  const onChangeSlider = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    sliderTrending.slickGoTo(currentTarget.value);
  };

  const settings = {
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
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  let sliderTrending: any;

  return (
    <section className={styles.trending}>
      <h2 className={styles.title}>
        Trending Now <MobileRightArrowIcon className={styles.mobileArrow} />
      </h2>

      <Slider className={styles.slider} ref={(slider) => (sliderTrending = slider)} {...settings}>
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
      </Slider>

      <InputRange max={maxInput} onChange={onChangeSlider} sizeThumb="small" value={currIdx} />
    </section>
  );
};

export default Trending;
