// @flow
import React from 'react'

type Props = {
  +className: string,
  +handleChange: boolean => string => void,
  +max: number,
  +min: number,
  +placeholder: string
}
type State = {
  value: string
}

export default class TextInput extends React.Component<Props, State> {
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
        maxLength={this.props.max}
        minLength={this.props.min}
        onChange={event => this.handleChange(event)}
        placeholder={this.props.placeholder}
        type="text"
        value={this.state.value}
      />
    )
  }
}
