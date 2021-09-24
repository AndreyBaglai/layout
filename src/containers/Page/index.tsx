import React from 'react';

import Header from 'components/Header';
import Sample from 'components/Sample';
import Divider from 'components/Divider';

import imageSrc1 from 'sources/images/top-bg.png';
import imageSrc2 from 'sources/images/bottom-bg.png';
import categoriesSrc1 from 'sources/images/categories-1.png';
import categoriesSrc2 from 'sources/images/categories-2.png';
import dontMissSrc1 from 'sources/images/dont-miss-1.png';

import InputRange from 'components/InputRange';
import SectionHeader from 'components/SectionHeader';
import Card from 'components/Card';

const Page: React.FC = () => {
  // const onClick = () => {
  //   document.body.classList.toggle('dark');
  // };

  return (
    <>
      <Header />
      <Sample
        title="New Collection"
        text="Inspired by city explorers. Made to move. Built for tomorrow"
        controls={true}
        imageBg={imageSrc1}
      />
      <Divider text="We’ve extended our returns period to 60 days" />
      {/* <InputRange />
      <SectionHeader title="Trending Now" controls={true} />
      <SectionHeader title="Don't miss" controls={false} /> */}
      <Card size="big" imageSrc={categoriesSrc1} text="Women" />
      <Card size="small" imageSrc={categoriesSrc2} text="Kids" />
      <Card size="middle" imageSrc={dontMissSrc1} text="Special Offer" />
      <Sample
        title="New in Town"
        text="Made to move. Built for tomorrow"
        controls={false}
        imageBg={imageSrc2}
      />
    </>
  );
};

export default Page;
