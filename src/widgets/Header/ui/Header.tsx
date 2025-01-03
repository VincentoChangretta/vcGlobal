import { Logo } from "widgets/Logo";
import "./Header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HeaderDevsRoutes,
  HeaderLessonsRoutes,
  NavRoutes,
} from "../routes/routes";
import { LogoValues } from "widgets/Logo/types/config";

export const Header = () => {
  const location = useLocation();
  const [currentNav, setCurrentNav] = useState(() => {
    return location.pathname === NavRoutes.LESSONS
      ? HeaderLessonsRoutes
      : HeaderDevsRoutes;
  });
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <ul className="flex gap-[30px]">
            {currentNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
