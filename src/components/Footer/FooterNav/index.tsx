import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  links: string[];
  columns: number;
}

const FooterNav: React.FC<IProps> = ({ title, links, columns }) => {
  return (
    <div className={styles.footerNav}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.nav} style={{ columnCount: columns }}>
        {links.map((link: string, idx: number) => (
          <li key={idx}><a href="#">{link}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
