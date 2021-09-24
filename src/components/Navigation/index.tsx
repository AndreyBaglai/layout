import React from 'react';

import Link from './Link';
import { ReactComponent as MoreIcon } from 'sources/icons/nav-more-icon.svg';

import styles from './styles.module.scss';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <Link>Home</Link>
        <Link>New</Link>
        <Link>Men</Link>
        <Link>Women</Link>
        <Link>Kids</Link>
        <Link>Sale</Link>
        <Link>More <MoreIcon /></Link>
      </ul>
    </nav>
  );
};

export default Navigation;
