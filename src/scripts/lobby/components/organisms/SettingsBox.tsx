import * as React from 'react'
import {SettingsBoxBucketDanger} from '../molecules/SettingsBox/SettingsBoxBucketDanger'
import {SettingsBoxBucketLanguage} from '../molecules/SettingsBox/SettingsBoxBucketLanguage'
import {SettingsBoxBucketUser} from '../molecules/SettingsBox/SettingsBoxBucketUser'
import {lobby} from '../../types'

export interface Props {
  readonly handleChangeLanguage: (language: lobby.Language) => void
  readonly handleChangeUserEmail: (value: string) => void
  readonly handleChangeUserName: (value: string) => void
  readonly handleChangeUserPassword: (value: string) => void
  readonly handleSubmitLogout: () => void
  readonly initialValue: {
    readonly language: lobby.Language
    readonly userEmail: string
    readonly userName: string
  }
  readonly navigatable: boolean
}

export const SettingsBox: React.FC<Props> = props => (
  <div className="lo--settings">
    <SettingsBoxBucketLanguage
      handleChange={props.handleChangeLanguage}
      initialValue={props.initialValue.language}
      navigatable={props.navigatable}
    />
    <SettingsBoxBucketUser
      handleChangeUserEmail={props.handleChangeUserEmail}
      handleChangeUserName={props.handleChangeUserName}
      handleChangeUserPassword={props.handleChangeUserPassword}
      initialUserEmail={props.initialValue.userEmail}
      initialUserName={props.initialValue.userName}
      navigatable={props.navigatable}
    />
    <SettingsBoxBucketDanger
      handleSubmitLogout={props.handleSubmitLogout}
      navigatable={props.navigatable}
    />
  </div>
)
SettingsBox.displayName = 'SettingsBox'
