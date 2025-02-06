import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-[rgb(var(--color-secondary))]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <Image
            src="/about/about-1.png"
            alt="Architecture detail 1"
            width={300}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="md:col-span-4">
          <Image
            src="/about/about-2.png"
            alt="Architecture detail 2"
            width={300}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="md:col-span-4 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-light text-[rgb(var(--color-text-light))] mb-6">About</h2>
          <p className="text-[rgb(var(--color-primary))] mb-8">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-sm hover:underline text-[rgb(var(--color-primary))]"
          >
            READ MORE <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

