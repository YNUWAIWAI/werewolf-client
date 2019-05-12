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

  public getType() {
    if (this.props.name === 'password') {
      return 'password'
    }

    return 'text'
  }

  public handleTextChange(text: string) {
    this.setState({
      text
    })
  }

  public render() {
    return (
      <div className="field">
        <dl>
          <dt>
            <FormattedMessage
              id={`${this.props.type}-label-${this.props.name}`}
            >
              {
                text => (
                  <label
                    className="label"
                    htmlFor={`${this.props.type}-${this.props.name}`}
                  >
                    {text}
                  </label>
                )
              }

            </FormattedMessage>
          </dt>
          <dd>
            <input
              autoComplete="off"
              autoFocus={this.props.autoFocus}
              className="input"
              id={`${this.props.type}-${this.props.name}`}
              name={this.props.name}
              onChange={
                event => this.handleTextChange(event.target.value)
              }
              required
              type={this.getType()}
              value={this.state.text}
            />
          </dd>
        </dl>
      </div>
    )
  }
}
