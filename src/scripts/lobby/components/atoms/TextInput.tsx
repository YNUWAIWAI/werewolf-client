import * as React from 'react'

interface Props {
  readonly className: string
  readonly handleBlur?: (valid: boolean) => (value: string) => void
  readonly handleChange?: (valid: boolean) => (value: string) => void
  readonly id?: string
  readonly initialValue: string
  readonly max: number
  readonly min: number
  readonly placeholder: string
  readonly required: boolean
}
interface State {
  value: string
}

export default class TextInput extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      value: this.props.initialValue
    }
  }

  public shouldComponentUpdate() {
    return true
  }

  public handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    if (this.props.handleBlur) {
      this.props.handleBlur(event.target.validity.valid)(event.target.value)
    }
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: event.target.value
    })
    if (this.props.handleChange) {
      this.props.handleChange(event.target.validity.valid)(event.target.value)
    }
  }

  public render() {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        maxLength={this.props.max}
        minLength={this.props.min}
        onBlur={event => this.handleBlur(event)}
        onChange={event => this.handleChange(event)}
        placeholder={this.props.placeholder}
        required={this.props.required}
        type="text"
        value={this.state.value}
      />
    )
  }
}
