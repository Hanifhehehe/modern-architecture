import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectsGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[rgb(var(--color-text-light))] mb-8 md:mb-12">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured Project */}
          <div className="md:col-span-8 relative group">
            <Image
              src="/projects/project-1.png"
              alt="Sample Project"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 text-white">
                <h3 className="text-xl md:text-2xl font-light mb-2">Sample Project</h3>
                <Link href="/projects/sample" className="text-sm inline-flex items-center hover:underline">
                  VIEW MORE <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Smaller Projects */}
          <div className="md:col-span-4">
            <Image
              src="/projects/project-2.png"
              alt="Project 2"
              width={300}
              height={400}
              className="w-full h-[200px] md:h-[400px] object-cover"
            />
          </div>

          <div className="md:col-span-4">
            <Image
              src="/projects/project-3.png"
              alt="Project 3"
              width={300}
              height={400}
              className="w-full h-[200px] md:h-[400px] object-cover"
            />
          </div>

          <div className="md:col-span-4">
            <Image
              src="/projects/project-4.png"
              alt="Project 4"
              width={300}
              height={400}
              className="w-full h-[200px] md:h-[400px] object-cover"
            />
          </div>

          <div className="md:col-span-4">
            <Image
              src="/projects/project-5.png"
              alt="Project 5"
              width={300}
              height={400}
              className="w-full h-[200px] md:h-[400px] object-cover"
            />
          </div>
        </div>
        <div className="text-center mt-8 md:mt-12">
          <Link href="/projects" className="inline-flex items-center text-sm hover:underline">
            ALL PROJECTS <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

