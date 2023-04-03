import React from 'react';
import Button from '../Button';
import './styles.css';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  label?: string;
  btnLabel?: string;
  inputStyle?: React.CSSProperties | undefined;
}

function Input({
  onSubmit, value, onChange, label, btnLabel = label, inputStyle,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="input-form-container">
      <label htmlFor="project-title" className="label">
        <input
          id="project-title"
          className="input"
          value={value}
          onChange={onChange}
          style={inputStyle}
          placeholder={label}
        />
      </label>
      {onSubmit ? (
        <Button type="submit">
          {btnLabel}
        </Button>
      ) : null}
    </form>
  );
}

Input.defaultProps = {
  onSubmit: undefined,
  inputStyle: undefined,
  label: undefined,
  btnLabel: undefined,
};

export default Input;
