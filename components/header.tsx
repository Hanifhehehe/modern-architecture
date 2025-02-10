/* This component uses the Next.js `use client` directive to enable server-side rendering */
"use client"

/* Importing Link from next/link and Image from next/image for use in this component */
import Link from "next/link"
import Image from "next/image"

/* Importing Menu from lucide-react and Button from a local component (Button) for use in this component */
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

/* Importing useTheme and usePathname from Next.js and using them to manage theme and get the current pathname, respectively */
import { useTheme } from "@/contexts/ThemeContext"
import { usePathname } from "next/navigation"

/* Defining the default component (Header) that will be used as the entry point for this code block */
export default function Header() {
  /* Using useTheme to get the current theme and assigning it to a variable called 'theme' */
  const { theme } = useTheme();

  /* Using usePathname to get the current pathname and assigning it to a variable called 'pathname' */
  const pathname = usePathname();

  /* Defining an array of links with their corresponding names and hrefs */
  const links = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  /* Returning the JSX for this component's header */
  return (
    <nav
      /* Adding a class to the nav element based on the theme and pathname */
      className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <Link
        /* Wrapping the logo with a Link component and adding some basic styles */
        href="/" className="flex items-center">
        <Image
          src="/logo/logo-header.png"
          alt="Digital Project Logo"
          width={40}
          height={40}
          className="w-auto h-6 sm:h-8"
        />
      </Link>
      <div
        /* Hiding the links on small screens and adding some basic styles */
        className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`${isActive ? "border-b" : ""} ${
                theme === "dark" ? "border-white" : "border-black"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <Button
        /* Adding a button with some basic styles and hiding it on large screens */
        variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </nav>
  );
}
