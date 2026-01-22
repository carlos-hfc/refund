interface ButtonProps extends React.ComponentProps<"button"> {
  isLoading?: boolean
}

export function Button({
  isLoading,
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      data-loading={isLoading}
      className={[
        "flex items-center justify-center rounded-lg bg-green-100 text-white cursor-pointer not-data-[loading=true]:hover:bg-green-200 transition ease-linear h-12 data-[loading=true]:opacity-50 data-[loading=true]:cursor-progress",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  )
}
