import leftImg from "@/assets/left.svg"
import rightImg from "@/assets/right.svg"

import { Button } from "./button"

interface PaginationProps {
  current: number
  totalPages: number
  onNext(): void
  onPrev(): void
}

export function Pagination({
  current,
  totalPages,
  onNext,
  onPrev,
}: PaginationProps) {
  return (
    <div className="flex flex-1 justify-center items-center gap-2">
      <Button
        variant="iconSmall"
        aria-label="Página anterior"
        disabled={current === 1}
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
      >
        <img
          src={rightImg}
          alt=""
        />
      </Button>
    </div>
  )
}
