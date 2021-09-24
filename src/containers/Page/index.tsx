import React from 'react';

import Header from 'components/Header';
import Sample from 'components/Sample';
import Divider from 'components/Divider';

import imageSrc1 from 'sources/images/top-bg.png';
import imageSrc2 from 'sources/images/bottom-bg.png';

import InputRange from 'components/InputRange';
import SectionHeader from 'components/SectionHeader';
import Card from 'components/Card';
import Categories from './Categories';
import DontMiss from './DontMiss';

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
      {/*
      <SectionHeader title="Don't miss" controls={false} /> */}
      <Categories />
      <DontMiss />
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
