import React from 'react';
import Button from '../Button';
import './styles.css';

type Props = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

function Input({
  onSubmit, value, onChange, label,
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
        />
      </label>
      {onSubmit ? (
        <Button type="submit">
          Create a task
        </Button>
      ) : null}
    </form>
  );
}

Input.defaultProps = {
  onSubmit: undefined,
};

export default Input;
