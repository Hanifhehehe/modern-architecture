"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    // Check for system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    // setTheme(mediaQuery.matches ? "dark" : "light")
    setTheme(mediaQuery.matches ? "light" : "light")

    // Listen for changes in system preference
    const listener = (e: MediaQueryListEvent) => {
      // setTheme(e.matches ? "dark" : "light")
      setTheme(e.matches ? "light" : "light")
    }
    mediaQuery.addListener(listener)

    return () => mediaQuery.removeListener(listener)
  }, [])

  const toggleTheme = () => {
    // setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    setTheme((prevTheme) => (prevTheme === "light" ? "light" : "light"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

