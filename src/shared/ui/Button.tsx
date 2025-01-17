import { useTheme } from 'app/provider/ThemeProvider';
import { Themes } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    black?: boolean;
    inputButton?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const { theme } = useTheme();
    const { children, className, black, inputButton, ...otherProps } = props;

    const setColor = () => {
        return 'bg-mainBg text-mainBgInv';
    };

    return (
        <button
            className={`button ${black ? 'bg-mainBg text-mainBgInv' : 'bg-mainBgInv text-mainBg'} ${className ? className : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};
