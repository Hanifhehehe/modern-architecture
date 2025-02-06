"use client"

import { useState } from "react"

import Footer from "@/components/footer"
import GalleryImage from "@/components/gallery-image"
import { useTheme } from "@/contexts/ThemeContext"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Architectural detail in grayscale",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Lighthouse at sunset",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Modern glass ceiling structure",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Red and white lighthouse",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Historic ruins with lawn",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Classical architectural arch",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "European city street",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Modern colonnade building",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Venetian waterfront",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Modern skyscraper view",
  },
]

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-light text-[rgb(var(--color-text-light))]">Photo</h1>
            <h1 className="text-4xl md:text-6xl font-normal text-[rgb(var(--color-primary))]">Gallery</h1>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <GalleryImage key={index} src={image.src} alt={image.alt} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="flex items-center">
              <span className="text-[rgb(var(--color-text-light))]">0</span>
              <span className="text-[rgb(var(--color-primary))]">1</span>
            </div>
            <span className="text-[rgb(var(--color-text-light))]">05</span>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                disabled={currentPage === 5}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

