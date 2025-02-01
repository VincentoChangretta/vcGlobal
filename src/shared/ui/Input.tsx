import { useTheme } from 'app/provider/ThemeProvider';
import { Themes } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { FC, ReactNode } from 'react';

interface InputProps {
    children?: ReactNode;
    type: string;
    name: string;
    boxClassName?: string;
    inpClassName?: string;
    placeholder?: string;
}

export const Input: FC<InputProps> = ({
    children,
    type,
    boxClassName,
    inpClassName,
    placeholder,
    name,
}) => {
    const { theme } = useTheme();

    return (
        <div
            className={`flex gap-[30px] max-w-[550px] p-[15px] pl-[30px] bg-mainBgInvC text-mainBg ${boxClassName ? boxClassName : 'rounded-stdRadius'}`}
        >
            <input
                className={`w-full ${inpClassName ? inpClassName : ''}`}
                name={name}
                type={type}
                placeholder={placeholder}
                required
            />
            {children}
        </div>
    );
};
