"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface GalleryImageProps {
  src: string
  alt: string
}

export default function GalleryImage({ src, alt }: GalleryImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="relative aspect-square cursor-pointer group overflow-hidden" onClick={() => setIsOpen(true)}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-auto h-auto p-0">
          <div className="relative h-[80vh]">
            <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" priority />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

