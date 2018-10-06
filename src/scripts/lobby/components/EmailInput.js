// @flow
import React from 'react'

type Props = {
  +className: string,
  +handleChange: boolean => string => void,
  +initialValue: string,
  +id: string
}
type State = {
  value: string
}

export default class EmaildInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      value: this.props.initialValue
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
