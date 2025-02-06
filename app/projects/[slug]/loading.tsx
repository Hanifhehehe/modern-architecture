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

          {/* Hero Image Skeleton */}
          <Skeleton className="w-full aspect-[16/9] mb-12" />

          {/* Content Grid Skeletons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Skeleton className="aspect-[4/3]" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>

          {/* Floor Plan Skeletons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skeleton className="aspect-[4/3]" />
            <Skeleton className="aspect-[4/3]" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

