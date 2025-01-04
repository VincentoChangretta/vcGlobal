import { useContext } from "react"
import { LOCAL_STORE_THEME, ThemeContext, Themes } from "./ThemeContext"

export const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORE_THEME, newTheme)
    }
    return {theme, toggleTheme}
}