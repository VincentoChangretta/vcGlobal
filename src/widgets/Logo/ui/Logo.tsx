import { FC } from 'react';
import { LogoValues } from '../types/config';
import { NavRoutes } from 'widgets/Header/routes/routes';
import { Link } from 'react-router-dom';

interface LogoProps {
    pathname: string;
    className?: string;
}

export const Logo: FC<LogoProps> = (props) => {
    const { pathname, className, ...otherProps } = props;
    const logoValue = {
        logo:
            pathname === NavRoutes.LESSONS
                ? LogoValues.VCLESSONS
                : LogoValues.VCDEVS,
    };

    return (
        <Link
            to='/'
            className={`${className ? className : ''} text-4xl font-extrabold`}
            {...otherProps}
        >
            {logoValue.logo}
        </Link>
    );
};
