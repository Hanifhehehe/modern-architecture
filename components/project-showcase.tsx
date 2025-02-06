"use client"

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col justify-center">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-light text-[rgb(var(--color-text-light))]">PROJECT</h2>
          <h1 className="text-4xl md:text-6xl font-normal text-[rgb(var(--color-primary))]">Lorum</h1>
          <div className="flex items-center space-x-4 pt-4 md:pt-8">
            <button className="p-2 hover:bg-[rgb(var(--color-secondary))] rounded-full">
              <ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button className="p-2 hover:bg-[rgb(var(--color-secondary))] rounded-full">
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
          <div className="pt-2 md:pt-4 text-sm">
            <span className="text-[rgb(var(--color-text-light))]">0</span>
            <span className="text-[rgb(var(--color-primary))]">1</span>
            <span className="text-[rgb(var(--color-text-light))] ml-2">02</span>
          </div>
        </div>
      </div>
      <div className="relative mt-8 md:mt-0">
        <Image
          src="/hero/hero.png"
          alt="Modern white building architecture"
          width={800}
          height={600}
          className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
        />
        <Link href="/projects/lorum" className="inline-flex items-center space-x-2 mt-4 text-sm hover:underline">
          <span>VIEW PROJECT</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

