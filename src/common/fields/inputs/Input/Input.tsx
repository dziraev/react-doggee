import { useRef, useState } from 'react';
import styles from '../Input.module.css';

export const Input: React.FC<InputProps> = ({ isError = false, helperText, label, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(!!props.value ?? false);
  return (
    <>
      <div
        className={`${styles.input_container} ${isError ? styles.input_container : ''} ${
          isFocus ? styles.focused : ''
        }`}
        onClick={() => {
          inputRef.current?.focus();
          setIsFocus(true);
        }}
      >
        <label htmlFor='' className={styles.input_label}>
          {label}
        </label>
        <input
          onBlur={() => !props.value && setIsFocus(false)}
          ref={inputRef}
          className={styles.input}
          {...props}
        />
      </div>
      {isError && helperText && <div className={styles.helper_text}>{helperText}</div>}
    </>
  );
};
