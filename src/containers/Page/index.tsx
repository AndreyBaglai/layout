import React from 'react';

import Header from 'components/Header';
import Sample from 'components/Sample';
import Divider from 'components/Divider';

import imageTopBg from 'sources/images/top-bg.png';
import imageBottomBg from 'sources/images/bottom-bg.png';
import InputRange from 'components/InputRange';
import SectionHeader from 'components/SectionHeader';

const Page: React.FC = () => {
  // const onClick = () => {
  //   document.body.classList.toggle('dark');
  // };

  return (
    <>
      <Header />
      <Sample title="New Collection" text="Inspired by city explorers. Made to move. Built for tomorrow" controls={true} imageBg={imageTopBg} />
      <Divider text="We’ve extended our returns period to 60 days" />
      <InputRange />
      <SectionHeader title="Trending Now" controls={true} />
      <Sample title="New in Town" text="Made to move. Built for tomorrow" controls={false} imageBg={imageBottomBg} />
    </>
  );
};

export default Page;
