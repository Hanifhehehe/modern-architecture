import { Skeleton } from "@/components/ui/skeleton"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Title Skeletons */}
          <div className="mb-12">
            <Skeleton className="h-12 w-48 mb-2" />
            <Skeleton className="h-12 w-64" />
          </div>

          {/* Gallery Grid Skeletons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} className="aspect-square" />
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

