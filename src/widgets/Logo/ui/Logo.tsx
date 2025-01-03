import { useState } from "react";
import { LogoValues } from "../types/config";
import { NavRoutes } from "widgets/Header/routes/routes";
import { useLocation } from "react-router-dom";

export const Logo = () => {
  const location = useLocation();
  const [currentLogo, setCurrentLogo] = useState((): string => {
    return location.pathname === NavRoutes.LESSONS
      ? LogoValues.VCLESSONS
      : LogoValues.VCDEVS;
  });

  return <a className="text-2xl font-extrabold">{currentLogo}</a>;
};
