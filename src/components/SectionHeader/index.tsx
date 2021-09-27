import React from 'react';

import { ReactComponent as LeftArrowIcon } from 'sources/icons/left-arrow-icon.svg';
import { ReactComponent as RightArrowIcon } from 'sources/icons/right-arrow-icon.svg';
import { ReactComponent as MobileRightArrowIcon } from 'sources/icons/mobile-arrow-icon.svg'

import styles from './styles.module.scss';

interface IProps {
  title: string;
  controls: boolean;
}

const SectionHeader: React.FC<IProps> = ({ title, controls }) => {
  return (
    <div className={styles.sectionHeader}>
      <h3 className={styles.title}>{title}<MobileRightArrowIcon className={styles.mobileArrow} /></h3>
      {controls && (
        <div className={styles.arrowsWrapper}>
          <LeftArrowIcon />
          <RightArrowIcon />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
