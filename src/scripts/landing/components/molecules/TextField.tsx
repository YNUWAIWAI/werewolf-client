import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  autoFocus: boolean
  name: 'email' | 'name' | 'password'
  type: 'login' | 'signup'
}
interface State {
  text: string
}

export default class TextField extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  public shouldComponentUpdate() {
    return true
  }

  public handleTextChange(text: string) {
    this.setState({
      text
    })
  }

  public render() {
    return (
      <div className="la--field">
        <label
          className="la--label"
          htmlFor={`${this.props.type}-${this.props.name}`}
        >
          <FormattedMessage
            id={`${this.props.type}-label-${this.props.name}`}
          />
        </label>
        <input
          autoComplete="off"
          autoFocus={this.props.autoFocus}
          className="la--input"
          id={`${this.props.type}-${this.props.name}`}
          minLength={this.props.name === 'password' ? 8 : undefined}
          name={this.props.name}
          onChange={
            event => this.handleTextChange(event.target.value)
          }
          required
          type={this.props.name === 'password' ? 'password' : 'text'}
          value={this.state.text}
        />
      </div>
    )
  }
}
