import { Logo } from "widgets/Logo";
import "./Header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HeaderDevsRoutes,
  HeaderLessonsRoutes,
  NavRoutes,
} from "../routes/routes";
import { Button } from "shared/ui/Button";
import { useTheme } from "app/provider/ThemeProvider";
import { ThemeButton } from "shared/ui/ThemeButton";

export const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const currentNav = location.pathname === NavRoutes.LESSONS ? HeaderLessonsRoutes : HeaderDevsRoutes;
  const btnValue = {
    name:location.pathname === NavRoutes.LESSONS ? "Записаться" : "Заказать сайт",
  };
  return (
    <header>
      <div className="container">
        <div className="inner">
          <Logo pathname={location.pathname} className="grow basis-0" />
          <ul className="flex gap-[30px]">
            {currentNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end gap-[20px] grow basis-0">
            <Button name={btnValue.name} />
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
};
