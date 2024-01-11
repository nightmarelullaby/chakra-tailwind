"use client";
import { createContext,useState } from "react"
export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [currentMode,setCurrentMode] = useState("white")
    const toggleMode = () => {
        if(currentMode === "dark") return setCurrentMode("white")
        if(currentMode === "white") return setCurrentMode("dark")        
    }

    return <ThemeContext.Provider value={{currentMode,toggleMode}}>
        {children}
    </ThemeContext.Provider>
}