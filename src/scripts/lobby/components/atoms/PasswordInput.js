// @flow
import React from 'react'

type Props = {
  +className: string,
  +handleChange: boolean => string => void,
  +id: string
}
type State = {
  value: string
}

export default class PasswordInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      value: ''
    }
  }
  shouldComponentUpdate() {
    return true
  }
  handleChange(event: SyntheticInputEvent<HTMLInputElement>) {
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
