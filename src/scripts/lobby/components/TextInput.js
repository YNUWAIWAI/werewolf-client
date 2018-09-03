// @flow
import React from 'react'

type Props = {
  +className: string,
  +handleChange: boolean => string => void,
  +initialValue: string,
  +max: number,
  +min: number,
  +placeholder: string,
  +required: boolean
}
type State = {
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
        required={this.props.required}
        type="text"
        value={this.state.value}
      />
    )
  }
}
