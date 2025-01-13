import { useTheme } from 'app/provider/ThemeProvider';
import { Themes } from 'app/provider/ThemeProvider/lib/ThemeContext';

export const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();
    const sliderPosition = (): string => {
        return theme === Themes.LIGHT ? 'left-1' : 'right-1';
    };
    return (
        <div
            className='themeButton relative w-[80px] h-[33px] rounded-stdRadius p-1 cursor-pointer'
            onClick={toggleTheme}
        >
            <div
                className={`slider absolute ${sliderPosition()} w-[25px] h-[25px] rounded-full transition-all`}
            ></div>
        </div>
    );
};
