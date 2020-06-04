import * as React from 'react'

interface Props {
  readonly className: string
  readonly handleChange: (valid: boolean) => (value: string) => void
  readonly id: string
  readonly initialValue: string
}

export const EmailInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [value, setValue] = React.useState(props.initialValue)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    props.handleChange(event.target.validity.valid)(event.target.value)
  }

  return (
    <input
      className={props.className}
      id={props.id}
      maxLength={256}
      minLength={6}
      onChange={handleChange}
      ref={ref}
      required
      type="email"
      value={value}
    />
  )
})

EmailInput.displayName = 'EmailInput'
