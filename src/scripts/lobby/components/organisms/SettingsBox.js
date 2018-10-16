// @flow
import EmailInput from '../atoms/EmailInput'
import {FormattedMessage} from 'react-intl'
import type {Language} from 'lobby'
import LanguageSelect from '../atoms/LanguageSelect'
import PasswordInput from '../atoms/PasswordInput'
import React from 'react'
import TextInput from '../atoms/TextInput'

type Props = {
  +handleChangeLanguage: Language => void,
  +handleChangeUserEmail: string => void,
  +handleChangeUserName: string => void,
  +handleChangeUserPassword: string => void,
  +initialValue: {
    +language: Language,
    +userEmail: string,
    +userName: string
  }
}
type State = {
  language: {
    validity: boolean,
    value: Language
  },
  userEmail: {
    validity: boolean,
    value: string
  },
  userName: {
    validity: boolean,
    value: string
  },
  userPassword: {
    validity: boolean,
    value: string
  }
}

export default class SettingsBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      language: {
        validity: false,
        value: props.initialValue.language
      },
      userEmail: {
        validity: false,
        value: props.initialValue.userEmail
      },
      userName: {
        validity: false,
        value: props.initialValue.userName
      },
      userPassword: {
        validity: false,
        value: ''
      }
    }
  }
  shouldComponentUpdate() {
    return true
  }
  handleChange(propName: string) {
    return (validity: boolean) => (value: string) => {
      this.setState({
        [propName]: {
          validity: validity && value !== this.props.initialValue[propName],
          value
        }
      })
    }
  }
  handleSubmit(propName: string) {
    return (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault()
      switch (propName) {
        case 'language':
          this.props.handleChangeLanguage(this.state.language.value)

          return
        case 'userEmail':
          this.props.handleChangeUserEmail(this.state.userEmail.value)

          return
        case 'userName':
          this.props.handleChangeUserName(this.state.userName.value)

          return
        case 'userPassword':
          this.props.handleChangeUserPassword(this.state.userPassword.value)

          return
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
            onSubmit={event => this.handleSubmit('language')(event)}
          >
            <LanguageSelect
              className="settings--bucket--form--field"
              defaultValue={this.props.initialValue.language}
              handleChange={(() => this.handleChange('language'))()}
            />
            <FormattedMessage
              id="Settings.button(save)"
            >
              {
                (text: string) =>
                  <button
                    className="settings--bucket--form--button"
                    disabled={!this.state.language.validity}
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
            onSubmit={event => this.handleSubmit('userName')(event)}
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
              handleChange={(() => this.handleChange('userName'))()}
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
                    disabled={!this.state.userName.validity}
                    type="submit"
                  >
                    {text}
                  </button>
              }
            </FormattedMessage>
          </form>
          <form
            className="settings--bucket--form"
            onSubmit={event => this.handleSubmit('userEmail')(event)}
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
              handleChange={(() => this.handleChange('userEmail'))()}
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
                    disabled={!this.state.userEmail.validity}
                    type="submit"
                  >
                    {text}
                  </button>
              }
            </FormattedMessage>
          </form>
          <form
            className="settings--bucket--form"
            onSubmit={event => this.handleSubmit('userPassword')(event)}
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
              handleChange={(() => this.handleChange('userPassword'))()}
              id="userPassword"
            />
            <FormattedMessage
              id="Settings.button(save)"
            >
              {
                (text: string) =>
                  <button
                    className="settings--bucket--form--button"
                    disabled={!this.state.userPassword.validity}
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
            onSubmit={event => this.handleSubmit('logout')(event)}
          >
            <FormattedMessage
              id="Settings.button(logout)"
            >
              {
                (text: string) =>
                  <button
                    className={`settings--bucket--form--button ${this.state.language.validity ? '' : 'invalid'}`}
                    type="submit"
                  >
                    {text}
                  </button>
              }
            </FormattedMessage>
          </form>
          <form
            className="settings--bucket--form danger"
            onSubmit={event => this.handleSubmit('deactivate')(event)}
          >
            <FormattedMessage
              id="Settings.button(deactivate)"
            >
              {
                (text: string) =>
                  <button
                    className={`settings--bucket--form--button ${this.state.language.validity ? '' : 'invalid'}`}
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
