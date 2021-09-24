import React from 'react';

import ToggleTheme from 'components/ToggleTheme';
import Button from 'components/Button';
import FooterNav from './FooterNav';

import { ReactComponent as MarkerIcon } from 'sources/icons/marker-icon.svg';
import { ReactComponent as Logo } from 'sources/icons/logo-icon.svg';
import { ReactComponent as LinkedInIcon } from 'sources/icons/linkedin-icon.svg';
import { ReactComponent as FacebookIcon } from 'sources/icons/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from 'sources/icons/instagram-icon.svg';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Logo />
          <ToggleTheme />
        </div>

        <FooterNav title="Categories" links={['Popular', 'Sale', 'Men', 'Kids', 'New', 'Women']} columns={3} />
        <FooterNav title="About Us" links={['Contacts', 'Support']} columns={1} />

        <div className={styles.socialLinksWrapper}>
          <ul>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
          </ul>
          <Button>Shop</Button>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.place}>
          <MarkerIcon /> Moscow
        </div>
        <div>Cookie Setting</div>
        <div className={styles.last}>Terms of use</div>
      </div>
    </footer>
  );
};

export default Footer;
