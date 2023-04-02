import React from 'react';
import './styles.css';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
}

function Button({ children, onClick, type }: Props) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} className="btn">
      {children}
    </button>
  );
}

Button.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => { },
  type: 'button',
};

export default Button;
