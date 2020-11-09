import React from 'react';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={styles.footer_cantainer}>
        <div className={styles.footer_copyright}>
          <h3>Made with ❤ & ReactJs</h3>
          <h5>&copy;{new Date().getFullYear()} YIT | All rights reserved</h5>
        </div>
      </div>
    </>
  );
}
