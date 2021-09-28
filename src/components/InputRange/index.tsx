import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  max: number;
  onChange: () => void;
}

const InputRange: React.FC<IProps> = ({ max, onChange }) => (
  <div className={styles.inputWrapper}>
    <input className={styles.range} type="range" min="1" max={max} onChange={onChange} />
  </div>
);

export default InputRange;
