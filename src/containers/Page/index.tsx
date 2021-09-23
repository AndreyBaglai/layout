import React from 'react';

import Header from 'components/Header';
import Sample from 'components/Sample';
import Divider from 'components/Divider';

import image from 'sources/images/top-bg.png';

const Page: React.FC = () => {
  // const onClick = () => {
  //   document.body.classList.toggle('dark');
  // };

  return (
    <>
      <Header />
      <Sample title="New Collection" text="Inspired by city explorers. Made to move. Built for tomorrow" controls={true} imageBg={image} />
      <Divider text="We’ve extended our returns period to 60 days" />
    </>
  );
};

export default Page;
