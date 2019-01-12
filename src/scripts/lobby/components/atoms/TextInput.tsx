import * as React from 'react'

interface Props {
  readonly className: string
  readonly handleChange: (valid: boolean) => (value: string) => void
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
  constructor(props: Props) {
    super(props)

    this.state = {
      value: this.props.initialValue
    }
  }
  shouldComponentUpdate() {
    return true
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: event.target.value
    })
    this.props.handleChange(event.target.validity.valid)(event.target.value)
  }
  render() {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        maxLength={this.props.max}
        minLength={this.props.min}
        onChange={event => this.handleChange(event)}
        placeholder={this.props.placeholder}
        required={this.props.required}
        type="text"
        value={this.state.value}
      />
    )
  }
}
