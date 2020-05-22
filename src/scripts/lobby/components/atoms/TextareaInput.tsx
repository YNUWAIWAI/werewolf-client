import * as React from 'react'

interface Props {
  readonly className: string
  readonly handleChange: (valid: boolean) => (value: string) => void
  readonly initialValue: string
  readonly max: number
  readonly min: number
  readonly navigatable: boolean
  readonly placeholder: string
  readonly required: boolean
  readonly rows: number
}
interface State {
  value: string
}

export default function TextareaInput(props: Props) {
  const [value, setValue] = React.useState(props.initialValue)
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
    props.handleChange(event.target.validity.valid)(event.target.value)
  }

  return (
    <textarea
      className={props.className}
      maxLength={props.max}
      minLength={props.min}
      onChange={handleChange}
      placeholder={props.placeholder}
      required={props.required}
      rows={props.rows}
      tabIndex={props.navigatable ? 0 : -1}
      value={value}
    />
  )
}
