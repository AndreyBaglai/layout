import React from 'react';

import ToggleTheme from 'components/ToggleTheme';
import Button from 'components/Button';
import FooterNav from './FooterNav';

import { ReactComponent as MarkerIcon } from 'sources/icons/marker-icon.svg';
import { ReactComponent as LinkedInIcon } from 'sources/icons/linkedin-icon.svg';
import { ReactComponent as FacebookIcon } from 'sources/icons/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from 'sources/icons/instagram-icon.svg';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <p className={styles.text}><span className={styles.changeText}>Stone</span>Tile</p>
          <ToggleTheme />
        </div>

        <div className={styles.navWrapper}>
          <FooterNav
            title="Categories"
            links={['Popular', 'Kids', 'Sale', 'New', 'Men', 'Women']}
            columns={3}
          />
          <FooterNav title="About Us" links={['Contacts', 'Support']} columns={1} />
        </div>

        <div className={styles.socialLinksWrapper}>
          <ul>
            <li>
              <a href="#">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
          </ul>
          <div className={styles.footerBtn}>
            <Button>Shop</Button>
          </div>
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
