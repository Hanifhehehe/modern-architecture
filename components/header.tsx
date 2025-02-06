import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo-header.png"
          alt="Digital Project Logo"
          width={40}
          height={40}
          className="w-auto h-8"
        />
      </Link>
      <div className="flex items-center space-x-8 text-sm">
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
    </nav>
  )
}


