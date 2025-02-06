import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
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
        <Link href="/main" className="border-b border-black">
          MAIN
        </Link>
        <Link href="/gallery" className="text-gray-600 hover:text-black">
          GALLERY
        </Link>
        <Link href="/projects" className="text-gray-600 hover:text-black">
          PROJECTS
        </Link>
        <Link href="/certifications" className="text-gray-600 hover:text-black">
          CERTIFICATIONS
        </Link>
        <Link href="/contacts" className="text-gray-600 hover:text-black">
          CONTACTS
        </Link>
      </div>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </nav>
  )
}

