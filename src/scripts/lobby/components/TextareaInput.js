// @flow
import React from 'react'

type Props = {
  +className: string,
  +handleChange: boolean => string => void,
  +max: number,
  +min: number,
  +placeholder: string,
  +rows: number
}
type State = {
  value: string
}

export default class TextareaInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      value: ''
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
        rows={this.props.rows}
        type="text"
        value={this.state.value}
      />
    )
  }
}
