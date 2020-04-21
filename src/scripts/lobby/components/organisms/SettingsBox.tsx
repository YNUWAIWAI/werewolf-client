import * as React from 'react'
import EmailInput from '../atoms/EmailInput'
import {FormattedMessage} from 'react-intl'
import LanguageSelect from '../atoms/Select/LanguageSelect'
import PasswordInput from '../atoms/PasswordInput'
import TextInput from '../atoms/TextInput'
import {lobby} from '../../types'

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
  readonly handleSubmitLogout: () => void
  readonly initialValue: {
    readonly [PropName.language]: lobby.Language
    readonly [PropName.userEmail]: string
    readonly [PropName.userName]: string
  }
  readonly navigatable: boolean
}

interface State {
  [PropName.language]: {
    valid: boolean
    value: lobby.Language
  }
  [PropName.userEmail]: {
    valid: boolean
    value: string
  }
  [PropName.userName]: {
    valid: boolean
    value: string
  }
  [PropName.userPassword]: {
    valid: boolean
    value: string
  }
}

export default class SettingsBox extends React.Component<Props, State> {
  public constructor(props: Props) {
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

  public shouldComponentUpdate() {
    return true
  }

  public handleChange(propName: PropName): (valid: boolean) => (value: string) => void {
    switch (propName) {
      case PropName.language:
        return valid => value => {
          const language = [lobby.Language.en, lobby.Language.fr, lobby.Language.it, lobby.Language.ja]
          const maybe = language.find(v => v === value)

          if (maybe) {
            this.setState({
              [propName]: {
                valid: valid && value !== this.props.initialValue[propName],
                value: maybe
              }
            })
          } else {
            throw Error(`Unknown language: ${value}`)
          }
        }
      case PropName.userEmail:
        return valid => value => {
          this.setState({
            [propName]: {
              valid: valid && value !== this.props.initialValue[propName],
              value
            }
          })
        }
      case PropName.userName:
        return valid => value => {
          this.setState({
            [propName]: {
              valid: valid && value !== this.props.initialValue[propName],
              value
            }
          })
        }
      case PropName.userPassword:
        return valid => value => {
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

  public handleSubmit(propName: PropName) {
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
        case PropName.logout:
          this.props.handleSubmitLogout()

          return
        case PropName.deactivate:
        default:
          return
      }
    }
  }

  public render() {
    return (
      <div className="lo--settings">
        <div className="lo--settings--bucket">
          <div className="lo--settings--bucket--head">
            <FormattedMessage
              id="Settings.head(language)"
            />
          </div>
          <form
            className="lo--settings--bucket--form"
            onSubmit={event => this.handleSubmit(PropName.language)(event)}
          >
            <LanguageSelect
              className="lo--settings--bucket--form--field"
              defaultValue={this.props.initialValue.language}
              handleChange={(() => this.handleChange(PropName.language))()}
              menuPosition="absolute"
              navigatable={this.props.navigatable}
            />
            <button
              className="lo--settings--bucket--form--button"
              disabled={!this.state.language.valid}
              type="submit"
            >
              <FormattedMessage
                id="Settings.button(save)"
              />
            </button>
          </form>
        </div>
        <div className="lo--settings--bucket">
          <div className="lo--settings--bucket--head">
            <FormattedMessage
              id="Settings.head(user)"
            />
          </div>
          <form
            className="lo--settings--bucket--form"
            onSubmit={event => this.handleSubmit(PropName.userName)(event)}
          >
            <label
              className="lo--settings--bucket--form--label"
              htmlFor="userName"
            >
              <FormattedMessage
                id="Settings.label(userName)"
              />
            </label>
            <TextInput
              className="lo--settings--bucket--form--field input"
              handleChange={(() => this.handleChange(PropName.userName))()}
              id="userName"
              initialValue={this.props.initialValue.userName}
              max={15}
              min={5}
              navigatable={this.props.navigatable}
              placeholder=""
              required
            />
            <button
              className="lo--settings--bucket--form--button"
              disabled={!this.state.userName.valid}
              type="submit"
            >
              <FormattedMessage
                id="Settings.button(save)"
              />
            </button>
          </form>
          <form
            className="lo--settings--bucket--form"
            onSubmit={event => this.handleSubmit(PropName.userEmail)(event)}
          >
            <label
              className="lo--settings--bucket--form--label"
              htmlFor="userEmail"
            >
              <FormattedMessage
                id="Settings.label(userEmail)"
              />
            </label>
            <EmailInput
              className="lo--settings--bucket--form--field input"
              handleChange={(() => this.handleChange(PropName.userEmail))()}
              id="userEmail"
              initialValue={this.props.initialValue.userEmail}
            />
            <button
              className="lo--settings--bucket--form--button"
              disabled={!this.state.userEmail.valid}
              type="submit"
            >
              <FormattedMessage
                id="Settings.button(save)"
              />
            </button>
          </form>
          <form
            className="lo--settings--bucket--form"
            onSubmit={event => this.handleSubmit(PropName.userPassword)(event)}
          >
            <label
              className="lo--settings--bucket--form--label"
              htmlFor="userPassword"
            >
              <FormattedMessage
                id="Settings.label(userPassword)"
              />
            </label>
            <PasswordInput
              className="lo--settings--bucket--form--field input"
              handleChange={(() => this.handleChange(PropName.userPassword))()}
              id="userPassword"
              navigatable
            />
            <button
              className="lo--settings--bucket--form--button"
              disabled={!this.state.userPassword.valid}
              type="submit"
            >
              <FormattedMessage
                id="Settings.button(save)"
              />
            </button>
          </form>
        </div>
        <div className="lo--settings--bucket danger">
          <div className="lo--settings--bucket--head danger">
            <FormattedMessage
              id="Settings.head(danger)"
            />
          </div>
          <form
            className="lo--settings--bucket--form danger"
            onSubmit={event => this.handleSubmit(PropName.logout)(event)}
          >
            <button
              className={`lo--settings--bucket--form--button ${this.state.language.valid ? '' : 'invalid'}`}
              type="submit"
            >
              <FormattedMessage
                id="Settings.button(logout)"
              />
            </button>
          </form>
          <form
            className="lo--settings--bucket--form danger"
            onSubmit={event => this.handleSubmit(PropName.deactivate)(event)}
          >
            <button
              className={`lo--settings--bucket--form--button ${this.state.language.valid ? '' : 'invalid'}`}
              disabled
              type="submit"
            >
              <FormattedMessage
                id="Settings.button(deactivate)"
              />
            </button>
          </form>
        </div>
      </div>
    )
  }
}
