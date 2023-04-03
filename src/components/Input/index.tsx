import React from 'react';
import Button from '../Button';
import './styles.css';

type Props = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  inputStyle?: React.CSSProperties | undefined;
}

function Input({
  onSubmit, value, onChange, label, inputStyle,
}: Props) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="project-title" className="label">
        {label}
        <input
          id="project-title"
          className="input"
          value={value}
          onChange={onChange}
          style={inputStyle}
        />
      </label>
      {onSubmit ? (
        <Button type="submit">
          {label}
        </Button>
      ) : null}
    </form>
  );
}

Input.defaultProps = {
  onSubmit: undefined,
  inputStyle: undefined,
};

export default Input;
