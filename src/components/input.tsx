interface InputProps extends React.ComponentProps<"input"> {
  legend?: string
}

export function Input({
  legend,
  className,
  type = "text",
  ...props
}: InputProps) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="uppercase text-xxs m-2 text-inherit">
          {legend}
        </legend>
      )}

      <input
        type={type}
        className={[
          "w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent focus:outline-green-100",
          className,
        ].join(" ")}
        {...props}
      />
    </fieldset>
  )
}
