import React from 'react';
import './styles.css';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
  disabled?: boolean;
}

function Button({
  children, onClick, type, disabled,
}: Props) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} className="btn" disabled={disabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => { },
  type: 'button',
  disabled: false,
};

export default Button;
