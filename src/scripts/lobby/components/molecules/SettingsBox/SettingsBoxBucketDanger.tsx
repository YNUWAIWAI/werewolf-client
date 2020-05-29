import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export interface Props {
  readonly handleSubmitLogout: () => void
  // readonly handleSubmitDeactivate: () => void
  readonly navigatable: boolean
}

export const SettingsBoxBucketDanger: React.FC<Props> = props => {
  const handleSubmitLogout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.handleSubmitLogout()
  }
  const handleSubmitDeactivate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // props.handleSubmitDeactivate()
  }

  return (
    <div className="lo--settings--bucket danger">
      <div className="lo--settings--bucket--head danger">
        <FormattedMessage
          id="Settings.head(danger)"
        />
      </div>
      <form
        className="lo--settings--bucket--form danger"
        onSubmit={handleSubmitLogout}
      >
        <button
          className="lo--settings--bucket--form--button"
          type="submit"
        >
          <FormattedMessage
            id="Settings.button(logout)"
          />
        </button>
      </form>
      <form
        className="lo--settings--bucket--form danger"
        onSubmit={handleSubmitDeactivate}
      >
        <button
          className="lo--settings--bucket--form--button"
          disabled
          type="submit"
        >
          <FormattedMessage
            id="Settings.button(deactivate)"
          />
        </button>
      </form>
    </div>
  )
}
SettingsBoxBucketDanger.displayName = 'SettingsBoxBucketDanger'
