import { createContext, useContext, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./themeConfig";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if (isDarkMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    const theme = isDarkMode ? darkTheme : lightTheme

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    return(
        <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)