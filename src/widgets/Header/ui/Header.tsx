import { Logo } from 'widgets/Logo';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'shared/ui/Button';
import {
  HeaderDevsRoutes,
  HeaderLessonsRoutes,
  NavRoutes,
} from '../routes/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export const Header = () => {
  const [burger, setBurger] = useState<boolean>(false);
  const location = useLocation();
  const currentNav =
    location.pathname === NavRoutes.LESSONS
      ? HeaderLessonsRoutes
      : HeaderDevsRoutes;
  const btnValue = {
    name:
      location.pathname === NavRoutes.LESSONS ? 'Записаться' : 'Заказать сайт',
  };

  const openBurger = () => {
    setBurger((prev) => !prev);
    document.body.classList.toggle('noScroll');
  };

  const closeBurger = () => {
    setBurger(false);
    document.body.classList.remove('noScroll');
  };

  return (
    <header className='w-1140:mb-[50px]'>
      <div className='container'>
        <div className='relative inner min-h-[100px]'>
          <Logo pathname={location.pathname} className='grow basis-0' />
          <div
            onClick={() => closeBurger()}
            className={`fixed inset-0 z-[9998] backdrop-blur transition-all  ${burger ? 'opacity-1 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'} `}
          ></div>
          <nav className={`burger-nav ${burger && 'translate-x-0'}`}>
            <ul className='flex gap-[30px] w-750:flex-col'>
              {currentNav.map((item) => {
                if (item.path.includes('#')) {
                  return (
                    <li key={item.path} onClick={() => closeBurger()}>
                      <a href={`${item.path.replace('/', '')}`}>{item.name}</a>
                    </li>
                  );
                }
                return (
                  <li key={item.path} onClick={() => closeBurger()}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <FontAwesomeIcon
            className='hidden text-4xl cursor-pointer w-750:inline-block w-750:absolute w-750:z-[9999] w-750:right-0 w-750:top-2/4 w-750:-translate-y-2/4'
            icon={!burger ? faBars : faX}
            onClick={openBurger}
          />
          <div className='flex items-center justify-end gap-[20px] grow basis-0 w-1200:hidden'>
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
