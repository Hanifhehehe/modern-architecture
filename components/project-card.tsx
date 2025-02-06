import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

export default function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 last:mb-0">
      <div className="relative aspect-[4/3] w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-light text-[rgb(var(--color-text-light))] mb-6">{title}</h2>
        <p className="text-[rgb(var(--color-primary))] mb-8">{description}</p>
        <Link
          href={projectUrl}
          className="inline-flex items-center text-sm hover:underline text-[rgb(var(--color-primary))]"
        >
          VIEW MORE <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

