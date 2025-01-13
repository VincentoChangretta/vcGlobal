import { useTheme } from 'app/provider/ThemeProvider';
import { Themes } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    inputButton?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const { theme } = useTheme();
    const { children, className, inputButton, ...otherProps } = props;

    const setColor = () => {
        if (inputButton) {
            return theme === Themes.LIGHT
                ? 'bg-mainBgInv text-mainBg'
                : 'bg-mainBg text-mainBgInv';
        } else {
            return theme === Themes.LIGHT
                ? 'bg-mainBg text-mainBgInv'
                : 'bg-mainBgInv text-mainBg';
        }
    };

    return (
        <button
            className={`button ${setColor()} ${className ? className : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};
