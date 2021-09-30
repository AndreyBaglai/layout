import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  max: number;
  sizeThumb: 'small' | 'middle' | 'big';
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  value?: number;
}

const InputRange: React.FC<IProps> = ({ max, onChange, sizeThumb, value }) => (
  <div className={styles.inputWrapper}>
    <input
      className={classNames(styles.range, styles[sizeThumb])}
      type="range"
      min="0"
      max={max}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default InputRange;
