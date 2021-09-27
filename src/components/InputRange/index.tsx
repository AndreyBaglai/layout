import React from 'react';

import styles from './styles.module.scss';

const InputRange: React.FC = () => (
  <div>
    <input className={styles.range} type="range" min="1" max="2" />
  </div>
);

export default InputRange;
