import * as React from 'react'

interface Props {
  readonly className: string
  readonly handleBlur?: (valid: boolean) => (value: string) => void
  readonly handleChange?: (valid: boolean) => (value: string) => void
  readonly id?: string
  readonly initialValue: string
  readonly max: number
  readonly min: number
  readonly navigatable: boolean
  readonly placeholder: string
  readonly required: boolean
}

const TextInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [value, setValue] = React.useState(props.initialValue)
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (props.handleBlur) {
      props.handleBlur(event.target.validity.valid)(event.target.value)
    }
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    if (props.handleChange) {
      props.handleChange(event.target.validity.valid)(event.target.value)
    }
  }

  return (
    <input
      className={props.className}
      id={props.id}
      maxLength={props.max}
      minLength={props.min}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={props.placeholder}
      ref={ref}
      required={props.required}
      tabIndex={props.navigatable ? 0 : -1}
      type="text"
      value={value}
    />
  )
})

TextInput.displayName = 'TextInput'
export default TextInput
