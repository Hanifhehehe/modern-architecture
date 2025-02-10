"use client"

import { useTheme } from "@/contexts/ThemeContext"
import Image from "next/image"

export default function ProjectDetail() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}>
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Project Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-light text-[rgb(var(--color-text-light))]">Sample</h1>
            <h1 className="text-4xl md:text-6xl font-normal text-[rgb(var(--color-primary))]">Project 1</h1>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/project/project-1.png"
                alt="Office space with computers"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Project Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Secondary Image */}
            <div className="relative aspect-[4/3]">
              <Image src="/project/project-2.png" alt="Office interior" fill className="object-cover" />
            </div>

            {/* Project Description */}
            <div className="space-y-6 text-[rgb(var(--color-primary))]">
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* Floor Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3]">
              <Image
                src="/project/project-3.png"
                alt="Floor plan - Layout 1"
                fill
                className="object-contain bg-[rgb(var(--color-secondary))]"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/project/project-4.png"
                alt="Floor plan - Layout 2"
                fill
                className="object-contain bg-[rgb(var(--color-secondary))]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

