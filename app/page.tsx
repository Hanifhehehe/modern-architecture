"use client"

import ProjectShowcase from "@/components/project-showcase"
import AboutSection from "@/components/about-section"
import MissionStatement from "@/components/mission-statement"
import ProjectsGrid from "@/components/projects-grid"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useTheme } from "@/contexts/ThemeContext"

export default function Home() {
  const { theme } = useTheme()

  return (
    <main className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <ProjectShowcase />
      <AboutSection />
      <MissionStatement />
      <ProjectsGrid />
      <Footer />
    </main>
  )
}

