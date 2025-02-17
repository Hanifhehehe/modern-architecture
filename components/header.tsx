"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/ThemeContext"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const { theme } = useTheme();
  const [isToggle, setIsToggle] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  function handleToggle() {
    setIsToggle(!isToggle);
  }

  return (
    <header className="relative">
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm">
          {links.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  isActive ? "border-b" : "hover:opacity-75"
                } ${theme === "dark" ? "border-white" : "border-black"} transition-all duration-200`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <Button onClick={handleToggle} variant="ghost" size="icon" className="md:hidden">
          {isToggle ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isToggle && (
        <div
          className={`absolute top-full left-0 w-full border-t z-50 ${
            theme === "dark" ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black border-gray-200"
          }`}
        >
          <ul className="flex flex-col space-y-2 p-4">
            {links.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.name}>
                  <Link
                    onClick={handleToggle}
                    href={link.href}
                    className={`block transition-all duration-200 ${
                      isActive ? "font-bold" : "hover:opacity-75"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
