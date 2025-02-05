import { Logo } from 'widgets/Logo';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'shared/ui/Button';
import {
    HeaderDevsRoutes,
    HeaderLessonsRoutes,
    NavRoutes,
} from '../routes/routes';
export const Header = () => {
    const location = useLocation();
    const currentNav =
        location.pathname === NavRoutes.LESSONS
            ? HeaderLessonsRoutes
            : HeaderDevsRoutes;
    const btnValue = {
        name:
            location.pathname === NavRoutes.LESSONS
                ? 'Записаться'
                : 'Заказать сайт',
    };

    return (
        <header>
            <div className='container'>
                <div className='inner'>
                    <Logo
                        pathname={location.pathname}
                        className='grow basis-0'
                    />
                    <ul className='flex gap-[30px]'>
                        {currentNav.map((item) => {
                            if (item.path.includes('#')) {
                                return (
                                    <li key={item.path}>
                                        <a
                                            href={`${item.path.replace('/', '')}`}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                );
                            }
                            return (
                                <li key={item.path}>
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className='flex items-center justify-end gap-[20px] grow basis-0'>
                        <Link
                            className='button bg-mainBgInv text-mainBg'
                            to={NavRoutes.PRICES}
                        >
                            Заказать
                        </Link>
                        {/* <ThemeButton /> */}
                    </div>
                </div>
            </div>
        </header>
    );
};
