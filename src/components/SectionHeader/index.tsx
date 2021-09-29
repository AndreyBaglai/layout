import React from 'react';

import { ReactComponent as LeftArrowIcon } from 'sources/icons/left-arrow-icon.svg';
import { ReactComponent as RightArrowIcon } from 'sources/icons/right-arrow-icon.svg';
import { ReactComponent as MobileRightArrowIcon } from 'sources/icons/mobile-arrow-icon.svg';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  controls: boolean;
  handlerRightArrow?: () => void;
  handlerLeftArrow?: () => void;
}

const SectionHeader: React.FC<IProps> = ({
  title,
  controls,
  handlerLeftArrow,
  handlerRightArrow,
}) => {
  return (
    <div className={styles.sectionHeader}>
      <h3 className={styles.title}>
        {title}
        <MobileRightArrowIcon className={styles.mobileArrow} />
      </h3>
      {controls && (
        <div className={styles.arrowsWrapper}>
          <LeftArrowIcon onClick={handlerLeftArrow} />
          <RightArrowIcon onClick={handlerRightArrow} />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
