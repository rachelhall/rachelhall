import { createContext, PropsWithChildren, useContext, useState } from "react";

type TTheme = "light" | "dark";
type TThemeContext = {
  theme: TTheme;
  setTheme: (input: "light" | "dark") => void | (() => void);
};

interface IProps extends PropsWithChildren {}

export const ThemeContext = createContext<TThemeContext>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: IProps) => {
  const systemPrefersDark = window.matchMedia("prefers-color-scheme: dark");

  const [theme, setTheme] = useState<TTheme>(
    systemPrefersDark ? "dark" : "light"
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
