'use client'

import { useTheme } from "@/contexts/ThemeContext"
import ContactForm from "@/components/contact-form"


export default function ProjectDetail() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}>
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <ContactForm />
      </main>
    </div>
  )
}

