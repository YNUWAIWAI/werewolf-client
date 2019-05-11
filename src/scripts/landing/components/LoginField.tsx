import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {}

export default function LoginField(props: Props) {
  return (
    <>
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
              required
              type="text"
              value=""
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
              autoFocus
              className="input"
              id="login-password"
              name="password"
              required
              type="text"
              value=""
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
              className="login-submit"
              type="submit"
            >
              {text}
            </button>
          )
        }
      </FormattedMessage>
    </>
  )
}
