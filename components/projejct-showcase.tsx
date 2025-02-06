"use client"

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectShowcase() {
  return (
    <div className="grid grid-cols-2 gap-8 px-8 py-12">
      <div className="flex flex-col justify-center">
        <div className="space-y-4">
          <h2 className="text-6xl font-light text-gray-300">PROJECT</h2>
          <h1 className="text-6xl font-normal text-black">Lorum</h1>
          <div className="flex items-center space-x-4 pt-8">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          <div className="pt-4 text-sm">
            <span className="text-gray-400">0</span>
            <span className="text-black">1</span>
            <span className="text-gray-400 ml-2">02</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website_of_architects___free_website__Community_-EWt0vI4nscIsfO22YC6Kb7mQaEuVzx.png"
          alt="Modern white building architecture"
          width={800}
          height={600}
          className="w-full h-[600px] object-cover"
        />
        <Link href="/projects/lorum" className="inline-flex items-center space-x-2 mt-4 text-sm hover:underline">
          <span>VIEW PROJECT</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}


