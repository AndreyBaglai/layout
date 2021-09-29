import Button from 'components/Button';
import React from 'react';

import { ReactComponent as FullScreenIcon } from 'sources/icons/fullscreen-icon.svg';
import { ReactComponent as MuteIcon } from 'sources/icons/mute-icon.svg';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  text: string;
  controls: boolean;
  imageBg: string;
  isRotateGradient: boolean;
}

const Sample: React.FC<IProps> = ({
  title,
  text,
  controls,
  imageBg,
  children,
  isRotateGradient,
}) => {
  return (
    <section
      className={styles.sample}
      style={{
        background: `linear-gradient(${
          isRotateGradient ? '360' : '180'
        }deg, #000000 0%, rgba(0, 0, 0, 0) 45%), url(${imageBg}`,
      }}>

      <div className={styles.content}>
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        <p className={styles.text}>{text}</p>
        <Button>Shop</Button>
      </div>
      
      {controls && (
        <div className={styles.icons}>
          <FullScreenIcon />
          <MuteIcon />
        </div>
      )}
      {children}
    </section>
  );
};

export default Sample;
