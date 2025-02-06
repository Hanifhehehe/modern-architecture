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
    src: "/gallery/gallery-1.png",
    alt: "Architectural detail in grayscale",
  },
  {
    src: "/gallery/gallery-2.png",
    alt: "Lighthouse at sunset",
  },
  {
    src: "/gallery/gallery-3.png",
    alt: "Modern glass ceiling structure",
  },
  {
    src: "/gallery/gallery-4.png",
    alt: "Red and white lighthouse",
  },
  {
    src: "/gallery/gallery-5.png",
    alt: "Historic ruins with lawn",
  },
  {
    src: "/gallery/gallery-6.png",
    alt: "Classical architectural arch",
  },
  {
    src: "/gallery/gallery-7.png",
    alt: "European city street",
  },
  {
    src: "/gallery/gallery-8.png",
    alt: "Modern colonnade building",
  },
  {
    src: "/gallery/gallery-9.png",
    alt: "Venetian waterfront",
  },
  {
    src: "/gallery/gallery-10.png",
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

