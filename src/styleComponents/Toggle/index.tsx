import React from "react";

import styles from "./Toggle.module.scss";

interface IProps {
  label?: string;
  isChecked: boolean;
  onChange: () => void;
}

export const Toggle: React.FC<IProps> = (props) => {
  const { isChecked, label, onChange } = props;

  return (
    <div className={styles.Toggle}>
      <div className={styles.toggleSwitch}>
        <input
          type="checkbox"
          className={styles.checkbox}
          name={label}
          id={label}
          checked={isChecked}
          onChange={onChange}
        />
        <label className={styles.label} htmlFor={label}>
          <span className={styles.inner} />
          <span className={styles.switch} role="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default Toggle;
