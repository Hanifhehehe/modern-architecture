import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, PinIcon as Pinterest } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--color-primary))] text-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div>
          <Image
            src="/logo/logo-footer.png"
            alt="Digital Project Logo"
            width={60}
            height={60}
            className="w-auto h-12 mb-4"
          />
        </div>

        <div>
          <h3 className="font-medium mb-4">Information</h3>
          <ul className="space-y-2 text-[rgb(var(--color-text-light))]">
            <li>
              <Link href="/main" className="hover:text-white">
                Main
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/certifications" className="hover:text-white">
                Certifications
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Contacts</h3>
          <ul className="space-y-2 text-[rgb(var(--color-text-light))]">
            <li>1234 Sample Street</li>
            <li>Austin Texas 78704</li>
            <li className="pt-4">512.333.2222</li>
            <li>sampleemail@gmail.com</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Social Media</h3>
          <div className="flex space-x-4 text-[rgb(var(--color-text-light))]">
            <Link href="#" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-white">
              <Pinterest className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-[rgb(var(--color-text-light))] text-sm mt-12">© 2021 All Rights Reserved</div>
    </footer>
  )
}

