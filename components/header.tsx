"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/ThemeContext"

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav
      className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/logo/logo-header.png"
          alt="Digital Project Logo"
          width={40}
          height={40}
          className="w-auto h-6 sm:h-8"
        />
      </Link>
      <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm">
        <Link href="/" className={`border-b ${theme === "dark" ? "border-white" : "border-black"}`}>
          HOME
        </Link>
        <Link href="/gallery" className={`hover:${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          GALLERY
        </Link>
        <Link href="/projects" className={`hover:${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          PROJECTS
        </Link>
        {/* <Link href="/certifications" className={`hover:${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          CERTIFICATIONS
        </Link> */}
        <Link
          href="/contact"
          onClick={toggleTheme}
          className={`hover:${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
        >
          CONTACT
        </Link>
      </div>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </nav>
  )
}

