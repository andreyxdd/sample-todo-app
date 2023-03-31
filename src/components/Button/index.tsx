import React from 'react';
import './styles.css';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: Props) {
  return (
    <button type="button" onClick={onClick} className="btn">
      {children}
    </button>
  );
}

export default Button;
