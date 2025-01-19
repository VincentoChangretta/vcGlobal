import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    black?: boolean;
    inputButton?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, className, black, inputButton, ...otherProps } = props;

    return (
        <button
            className={`button ${black ? 'bg-mainBg text-mainBgInv' : 'bg-mainBgInv text-mainBg'} ${className ? className : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};
