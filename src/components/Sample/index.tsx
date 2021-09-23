import Button from 'components/Button';
import React from 'react';

import { ReactComponent as FullScreenIcon } from 'sources/icons/fullscreen-icon.svg';
import { ReactComponent as MuteIcon } from 'sources/icons/mute-icon.svg';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  text: string;
  controls: boolean;
  imageBg: any;
}

const Sample: React.FC<IProps> = ({ title, text, controls, imageBg }) => {
  return (
    <section className={styles.sample} style={{backgroundImage: `url(${imageBg}`}}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Button>Shop</Button>
      </div>
      {controls && (
        <div className={styles.icons}>
          <FullScreenIcon />
          <MuteIcon />
        </div>
      )}
    </section>
  );
};

export default Sample;