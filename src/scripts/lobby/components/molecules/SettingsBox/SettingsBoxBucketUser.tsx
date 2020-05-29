import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {SettingsBoxBucketUserEmail} from '../../atoms/SettingsBoxBucket/SettingsBoxBucketUserEmail'
import {SettingsBoxBucketUserName} from '../../atoms/SettingsBoxBucket/SettingsBoxBucketUserName'
import {SettingsBoxBucketUserPassword} from '../../atoms/SettingsBoxBucket/SettingsBoxBucketUserPassword'

export interface Props {
  readonly handleChangeUserEmail: (value: string) => void
  readonly handleChangeUserName: (value: string) => void
  readonly handleChangeUserPassword: (value: string) => void
  readonly initialUserEmail: string
  readonly initialUserName: string
  readonly navigatable: boolean
}

export const SettingsBoxBucketUser: React.FC<Props> = props => (
  <div className="lo--settings--bucket">
    <div className="lo--settings--bucket--head">
      <FormattedMessage
        id="Settings.head(user)"
      />
    </div>
    <SettingsBoxBucketUserName
      handleSubmit={props.handleChangeUserName}
      initialValue={props.initialUserName}
      navigatable={props.navigatable}
    />
    <SettingsBoxBucketUserEmail
      handleSubmit={props.handleChangeUserEmail}
      initialValue={props.initialUserEmail}
      navigatable={props.navigatable}
    />
    <SettingsBoxBucketUserPassword
      handleSubmit={props.handleChangeUserPassword}
      navigatable={props.navigatable}
    />
  </div>
)
SettingsBoxBucketUser.displayName = 'SettingsBoxBucketUser'
