import * as React from 'react'

export interface Props {
  readonly className: string
  readonly handleChange: (valid: boolean) => (value: string) => void
  readonly id: string
  readonly navigatable: boolean
}

export default function PasswordInput(props: Props) {
  const [value, setValue] = React.useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    props.handleChange(event.target.validity.valid)(event.target.value)
  }

  return (
    <input
      className={props.className}
      id={props.id}
      maxLength={128}
      minLength={8}
      onChange={handleChange}
      required
      tabIndex={props.navigatable ? 0 : -1}
      type="password"
      value={value}
    />
  )
}
