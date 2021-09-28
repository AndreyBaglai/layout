import React from 'react';

import Header from 'components/Header';
import Sample from 'components/Sample';
import Divider from 'components/Divider';
import Categories from './Categories';
import DontMiss from './DontMiss';
import Trending from './Trending';
import Footer from 'components/Footer';

import imageSrc1 from 'sources/images/top-bg.png';
import imageSrc2 from 'sources/images/bottom-bg.png';

const Page: React.FC = () => {
  return (
    <>
      <Sample
        title="New Collection"
        text="Inspired by city explorers. Made to move. Built for tomorrow"
        controls={true}
        imageBg={imageSrc1}
        isRotateGradient={false}
      ><Header /></Sample>
      <Divider text="We’ve extended our returns period to 60 days" />
      <Trending />
      <Categories />
      <DontMiss />
      <Sample
        title="New in Town"
        text="Made to move. Built for tomorrow"
        controls={false}
        imageBg={imageSrc2}
        isRotateGradient={true}
      />
      <Footer />
    </>
  );
};

export default Page;
