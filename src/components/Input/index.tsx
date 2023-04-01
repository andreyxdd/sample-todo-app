import React from 'react';
import './styles.css';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

function Input({ value, onChange, label }: Props) {
  return (
    <form>
      <label htmlFor="project-title" className="label">
        {label}
        <input
          id="project-title"
          className="input"
          value={value}
          onChange={onChange}
        />
      </label>
    </form>
  );
}

export default Input;
