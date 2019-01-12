import * as React from 'react'

interface Props {
  readonly className: string
  readonly handleChange: (valid: boolean) => (value: string) => void
  readonly initialValue: string
  readonly max: number
  readonly min: number
  readonly placeholder: string
  readonly required: boolean
  readonly rows: number
}
interface State {
  value: string
}

export default class TextareaInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      value: this.props.initialValue
    }
  }
  shouldComponentUpdate() {
    return true
  }
  handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      value: event.target.value
    })
    this.props.handleChange(event.target.validity.valid)(event.target.value)
  }
  render() {
    return (
      <textarea
        className={this.props.className}
        maxLength={this.props.max}
        minLength={this.props.min}
        onChange={event => this.handleChange(event)}
        placeholder={this.props.placeholder}
        required={this.props.required}
        rows={this.props.rows}
        value={this.state.value}
      />
    )
  }
}
