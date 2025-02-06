import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center gap-4 mt-12">
      <div className="flex items-center">
        <span className="text-[rgb(var(--color-text-light))]">0</span>
        <span className="text-[rgb(var(--color-primary))]">{currentPage}</span>
      </div>
      <span className="text-[rgb(var(--color-text-light))]">{totalPages.toString().padStart(2, "0")}</span>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

