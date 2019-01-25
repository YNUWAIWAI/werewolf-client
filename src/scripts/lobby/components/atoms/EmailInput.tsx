import * as React from 'react'

export interface Props {
  readonly className: string
  readonly handleChange: (valid: boolean) => (value: string) => void
  readonly id: string
  readonly initialValue: string
}
export interface State {
  value: string
}

export default class EmaildInput extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      value: this.props.initialValue
    }
  }
  public shouldComponentUpdate() {
    return true
  }
  public handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: event.target.value
    })
    this.props.handleChange(event.target.validity.valid)(event.target.value)
  }
  public render() {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        maxLength={256}
        minLength={6}
        onChange={event => this.handleChange(event)}
        required
        type="email"
        value={this.state.value}
      />
    )
  }
}
