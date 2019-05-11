import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {}
interface State {
  email: string
  name: string
  password: string
}

export default class LoginField extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      password: ''
    }
  }

  public handleEmailChange(text: string) {
    this.setState({
      email: text
    })
  }

  public handleNameChange(text: string) {
    this.setState({
      name: text
    })
  }

  public handlePasswordChange(text: string) {
    this.setState({
      password: text
    })
  }

  public render() {
    return (
      <div className="signup-field">
        <div className="field">
          <dl>
            <dt>
              <FormattedMessage
                id="signup-label-name"
              >
                {
                  text => (
                    <label
                      className="label"
                      htmlFor="signup-name"
                      id="signup-label-name"
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
                id="signup-name"
                name="name"
                onChange={
                  event => this.handleNameChange(event.target.value)
                }
                required
                type="text"
                value={this.state.name}
              />
            </dd>
          </dl>
        </div>
        <div className="field">
          <dl>
            <dt>
              <FormattedMessage
                id="signup-label-email"
              >
                {
                  text => (
                    <label
                      className="label"
                      htmlFor="signup-email"
                      id="signup-label-email"
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
                id="signup-email"
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
        <div className="field" id="signup-field">
          <dl>
            <dt>
              <FormattedMessage
                id="signup-label-password"
              >
                {
                  text => (
                    <label
                      className="label"
                      htmlFor="signup-password"
                      id="signup-label-password"
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
                id="signup-password"
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
          id="signup-confirmation"
        >
          {
            text => (
              <p className="confirmation">
                {text}
              </p>
            )
          }
        </FormattedMessage>
        <FormattedMessage
          id="signup-submit"
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
