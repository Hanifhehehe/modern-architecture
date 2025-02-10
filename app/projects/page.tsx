"use client"

import { useState } from "react"
import ProjectCard from "@/components/project-card"
import Pagination from "@/components/pagination"
import { useTheme } from "@/contexts/ThemeContext"

const projects = [
  {
    id: 1,
    title: "Sample Project",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/project-list/project-1.png",
    projectUrl: "/projects/sample-project",
  },
  {
    id: 2,
    title: "Sample Project 2",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/project-list/project-2.png",
    projectUrl: "/projects/sample-project-2",
  },
  {
    id: 3,
    title: "Sample Project 3",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/project-list/project-3.png",
    projectUrl: "/projects/sample-project-3",
  },
]

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}>
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-light text-[rgb(var(--color-text-light))]">Our</h1>
            <h1 className="text-4xl md:text-6xl font-normal text-[rgb(var(--color-primary))]">Projects</h1>
          </div>

          <div className="space-y-16">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
        </div>
      </main>
    </div>
  )
}

