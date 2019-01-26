import * as React from 'react'

export interface Props {
  readonly className: string
  readonly handleChange: (valid: boolean) => (value: string) => void
  readonly id: string
}
export interface State {
  value: string
}

export default class PasswordInput extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      value: ''
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
        maxLength={128}
        minLength={8}
        onChange={event => this.handleChange(event)}
        required
        type="password"
        value={this.state.value}
      />
    )
  }
}
