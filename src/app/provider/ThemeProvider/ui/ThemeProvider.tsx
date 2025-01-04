import { FC, ReactNode, useMemo, useState } from "react";
import { LOCAL_STORE_THEME, ThemeContext, Themes } from "../lib/ThemeContext";

interface ThemeProviderProps {
  children?: ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORE_THEME) as Themes) || Themes.DARK;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const defaultValues = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultValues}>
      {children}
    </ThemeContext.Provider>
  );
};
