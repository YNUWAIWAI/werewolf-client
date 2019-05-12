import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {}
interface State {
  email: string
  password: string
}

export default class LoginField extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  public handleEmailChange(text: string) {
    this.setState({
      email: text
    })
  }

  public handlePasswordChange(text: string) {
    this.setState({
      password: text
    })
  }

  public render() {
    return (
      <div className="login-field">
        <div className="field">
          <dl>
            <dt>
              <FormattedMessage
                id="login-label-email"
              >
                {
                  text => (
                    <label
                      className="label"
                      htmlFor="login-email"
                      id="login-label-email"
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
                autoFocus
                className="input"
                id="login-email"
                name="email"
                onChange={
                  event => this.handleEmailChange(event.target.value)
                }
                required
                type="text"
                value={this.state.email}
              />
            </dd>
          </dl>
        </div>
        <div className="field" id="login-field">
          <dl>
            <dt>
              <FormattedMessage
                id="login-label-password"
              >
                {
                  text => (
                    <label
                      className="label"
                      htmlFor="login-password"
                      id="login-label-password"
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
                className="input"
                id="login-password"
                minLength={8}
                name="password"
                onChange={
                  event => this.handlePasswordChange(event.target.value)
                }
                required
                type="password"
                value={this.state.password}
              />
            </dd>
          </dl>
        </div>
        <FormattedMessage
          id="login-submit"
        >
          {
            text => (
              <button
                className="button"
                type="submit"
              >
                {text}
              </button>
            )
          }
        </FormattedMessage>
      </div>
    )
  }
}