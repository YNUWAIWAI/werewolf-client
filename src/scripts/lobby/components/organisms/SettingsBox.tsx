import * as React from 'react'
import EmailInput from '../atoms/EmailInput'
import {FormattedMessage} from 'react-intl'
import LanguageSelect from '../atoms/LanguageSelect'
import PasswordInput from '../atoms/PasswordInput'
import TextInput from '../atoms/TextInput'

export enum PropName {
  deactivate = 'deactivate',
  language = 'language',
  logout = 'logout',
  userEmail = 'userEmail',
  userName = 'userName',
  userPassword = 'userPassword'
}

export interface Props {
  readonly handleChangeLanguage: (language: lobby.Language) => void
  readonly handleChangeUserEmail: (value: string) => void
  readonly handleChangeUserName: (value: string) => void
  readonly handleChangeUserPassword: (value: string) => void
  readonly initialValue: {
    readonly [PropName.language]: lobby.Language
    readonly [PropName.userEmail]: string
    readonly [PropName.userName]: string
  }
}

interface State {
  [PropName.language]: {
    valid: boolean
    value: lobby.Language
  },
  [PropName.userEmail]: {
    valid: boolean
    value: string
  },
  [PropName.userName]: {
    valid: boolean
    value: string
  },
  [PropName.userPassword]: {
    valid: boolean
    value: string
  }
}

export default class SettingsBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      language: {
        valid: false,
        value: props.initialValue.language
      },
      userEmail: {
        valid: false,
        value: props.initialValue.userEmail
      },
      userName: {
        valid: false,
        value: props.initialValue.userName
      },
      userPassword: {
        valid: false,
        value: ''
      }
    }
  }
  shouldComponentUpdate() {
    return true
  }
  handleChange(propName: PropName): (valid: boolean) => (value: lobby.Language | string) => void {
    switch (propName) {
      case PropName.language:
        return (valid: boolean) => (value: lobby.Language) => {
          this.setState({
            [propName]: {
              valid: valid && value !== this.props.initialValue[propName],
              value
            }
          })
        }
      case PropName.userEmail:
        return (valid: boolean) => (value: string) => {
          this.setState({
            [propName]: {
              valid: valid && value !== this.props.initialValue[propName],
              value
            }
          })
        }
      case PropName.userName:
        return (valid: boolean) => (value: string) => {
          this.setState({
            [propName]: {
              valid: valid && value !== this.props.initialValue[propName],
              value
            }
          })
        }
      case PropName.userPassword:
        return (valid: boolean) => (value: string) => {
          this.setState({
            [propName]: {
              valid: valid && value !== '',
              value
            }
          })
        }
      case PropName.deactivate:
      case PropName.logout:
      default:
        throw Error(`Unknown propName: ${propName}`)
    }
  }
  handleSubmit(propName: PropName) {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      switch (propName) {
        case PropName.language:
          this.props.handleChangeLanguage(this.state.language.value)

          return
        case PropName.userEmail:
          this.props.handleChangeUserEmail(this.state.userEmail.value)

          return
        case PropName.userName:
          this.props.handleChangeUserName(this.state.userName.value)

          return
        case PropName.userPassword:
          this.props.handleChangeUserPassword(this.state.userPassword.value)

          return
        case PropName.deactivate:
        case PropName.logout:
        default:
          return
      }
    }
  }
  render() {
    return (
      <div className="settings">
        <div className="settings--bucket">
          <FormattedMessage
            id="Settings.head(language)"
          >
            {
              (text: string) =>
                <div className="settings--bucket--head">
                  {text}
                </div>
            }
          </FormattedMessage>
          <form
            className="settings--bucket--form"
            onSubmit={event => this.handleSubmit(PropName.language)(event)}
          >
            <LanguageSelect
              className="settings--bucket--form--field"
              defaultValue={this.props.initialValue.language}
              handleChange={(() => this.handleChange(PropName.language))()}
            />
            <FormattedMessage
              id="Settings.button(save)"
            >
              {
                (text: string) =>
                  <button
                    className="settings--bucket--form--button"
                    disabled={!this.state.language.valid}
                    type="submit"
                  >
                    {text}
                  </button>
              }
            </FormattedMessage>
          </form>
        </div>
        <div className="settings--bucket">
          <FormattedMessage
            id="Settings.head(user)"
          >
            {
              (text: string) =>
                <div className="settings--bucket--head">
                  {text}
                </div>
            }
          </FormattedMessage>
          <form
            className="settings--bucket--form"
            onSubmit={event => this.handleSubmit(PropName.userName)(event)}
          >
            <FormattedMessage
              id="Settings.label(userName)"
            >
              {
                (text: string) =>
                  <label
                    className="settings--bucket--form--label"
                    htmlFor="userName"
                  >
                    {text}
                  </label>
              }
            </FormattedMessage>
            <TextInput
              className="settings--bucket--form--field"
              handleChange={(() => this.handleChange(PropName.userName))()}
              id="userName"
              initialValue={this.props.initialValue.userName}
              max={15}
              min={5}
              placeholder=""
              required
            />
            <FormattedMessage
              id="Settings.button(save)"
            >
              {
                (text: string) =>
                  <button
                    className="settings--bucket--form--button"
                    disabled={!this.state.userName.valid}
                    type="submit"
                  >
                    {text}
                  </button>
              }
            </FormattedMessage>
          </form>
          <form
            className="settings--bucket--form"
            onSubmit={event => this.handleSubmit(PropName.userEmail)(event)}
          >
            <FormattedMessage
              id="Settings.label(userEmail)"
            >
              {
                (text: string) =>
                  <label
                    className="settings--bucket--form--label"
                    htmlFor="userEmail"
                  >
                    {text}
                  </label>
              }
            </FormattedMessage>
            <EmailInput
              className="settings--bucket--form--field"
              handleChange={(() => this.handleChange(PropName.userEmail))()}
              id="userEmail"
              initialValue={this.props.initialValue.userEmail}
            />
            <FormattedMessage
              id="Settings.button(save)"
            >
              {
                (text: string) =>
                  <button
                    className="settings--bucket--form--button"
                    disabled={!this.state.userEmail.valid}
                    type="submit"
                  >
                    {text}
                  </button>
              }
            </FormattedMessage>
          </form>
          <form
            className="settings--bucket--form"
            onSubmit={event => this.handleSubmit(PropName.userPassword)(event)}
          >
            <FormattedMessage
              id="Settings.label(userPassword)"
            >
              {
                (text: string) =>
                  <label
                    className="settings--bucket--form--label"
                    htmlFor="userPassword"
                  >
                    {text}
                  </label>
              }
            </FormattedMessage>
            <PasswordInput
              className="settings--bucket--form--field"
              handleChange={(() => this.handleChange(PropName.userPassword))()}
              id="userPassword"
            />
            <FormattedMessage
              id="Settings.button(save)"
            >
              {
                (text: string) =>
                  <button
                    className="settings--bucket--form--button"
                    disabled={!this.state.userPassword.valid}
                    type="submit"
                  >
                    {text}
                  </button>
              }
            </FormattedMessage>
          </form>
        </div>
        <div className="settings--bucket danger">
          <FormattedMessage
            id="Settings.head(danger)"
          >
            {
              (text: string) =>
                <div className="settings--bucket--head danger">
                  {text}
                </div>
            }
          </FormattedMessage>
          <form
            className="settings--bucket--form danger"
            onSubmit={event => this.handleSubmit(PropName.logout)(event)}
          >
            <FormattedMessage
              id="Settings.button(logout)"
            >
              {
                (text: string) =>
                  <button
                    className={`settings--bucket--form--button ${this.state.language.valid ? '' : 'invalid'}`}
                    type="submit"
                  >
                    {text}
                  </button>
              }
            </FormattedMessage>
          </form>
          <form
            className="settings--bucket--form danger"
            onSubmit={event => this.handleSubmit(PropName.deactivate)(event)}
          >
            <FormattedMessage
              id="Settings.button(deactivate)"
            >
              {
                (text: string) =>
                  <button
                    className={`settings--bucket--form--button ${this.state.language.valid ? '' : 'invalid'}`}
                    type="submit"
                  >
                    {text}
                  </button>
              }
            </FormattedMessage>
          </form>
        </div>
      </div>
    )
  }
}
