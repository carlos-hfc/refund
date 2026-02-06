import leftImg from "@/assets/left.svg"
import rightImg from "@/assets/right.svg"

import { Button } from "./button"

interface PaginationProps {
  current: number
  totalPages: number
  onPageChange(page: number): void
}

export function Pagination({
  current,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex flex-1 justify-center items-center gap-2">
      <Button
        variant="iconSmall"
        aria-label="Página anterior"
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
      >
        <img
          src={leftImg}
          alt=""
        />
      </Button>

      <span className="text-sm text-gray-200">
        {current}/{totalPages}
      </span>

      <Button
        variant="iconSmall"
        aria-label="Próxima página"
        disabled={current === totalPages}
        onClick={() => onPageChange(current + 1)}
      >
        <img
          src={rightImg}
          alt=""
        />
      </Button>
    </div>
  )
}
