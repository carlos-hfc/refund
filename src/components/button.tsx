import { classMerge } from "@/utils/class-merge"

interface ButtonProps extends React.ComponentProps<"button"> {
  isLoading?: boolean
  variant?: keyof typeof variants.button
}

const variants = {
  button: {
    base: "h-12",
    icon: "size-12",
    iconSmall: "size-8",
  },
}

export function Button({
  isLoading,
  className,
  type = "button",
  variant = "base",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      data-loading={isLoading}
      className={classMerge(
        "flex items-center justify-center rounded-lg bg-green-100 text-white cursor-pointer not-data-[loading=true]:hover:bg-green-200 transition ease-linear select-none data-[loading=true]:opacity-50 data-[loading=true]:cursor-progress disabled:opacity-50 disabled:pointer-events-none",
        variants.button[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
