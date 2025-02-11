import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';

// Описание пропсов кнопки
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  black?: boolean;
  inputButton?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, black, inputButton, ...otherProps } = props;

  return (
    <button
      ref={ref} 
      className={`button ${black ? 'bg-mainBg text-mainBgInv' : 'bg-mainBgInv text-mainBg'} ${className ? className : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
});

