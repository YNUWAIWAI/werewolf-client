// @flow
import React from 'react'

type Props = {
  +className: string,
  +handleChange: boolean => string => void,
  +initialValue: string,
  +max: number,
  +min: number,
  +placeholder: string,
  +required: boolean,
  +rows: number
}
type State = {
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
  handleChange(event: SyntheticInputEvent<HTMLTextAreaElement>) {
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
