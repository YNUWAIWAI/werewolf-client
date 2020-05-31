import * as React from 'react'
import {CreateNewAvatarAutomation} from '../atoms/CreateNewAvatar/CreateNewAvatarAutomation'
import {CreateNewAvatarAvatarImage} from '../atoms/CreateNewAvatar/CreateNewAvatarAvatarImage'
import {CreateNewAvatarAvatarLanguage} from '../atoms/CreateNewAvatar/CreateNewAvatarAvatarLanguage'
import {CreateNewAvatarAvatarName} from '../atoms/CreateNewAvatar/CreateNewAvatarAvatarName'
import {lobby} from '../../types'

export interface StateProps {
  readonly automation: lobby.Automation
  readonly image: string
  readonly language: lobby.Language
  readonly name: string
  readonly navigatable: boolean
}
export interface DispatchProps {
  readonly handleAutomationChange: (valid: boolean) => (value: lobby.Automation) => void
  readonly handleImageClick: (value: string) => void
  readonly handleLanguageChange: (valid: boolean) => (value: lobby.Language) => void
  readonly handleNameChange: (valid: boolean) => (value: string) => void
}
type Props = StateProps & DispatchProps

export const CreateNewRobotAvatarTable: React.FC<Props> = props => (
  <div
    className="lo--create-new-avatar--table robot"
  >
    <CreateNewAvatarAvatarName
      handleChange={props.handleNameChange}
      navigatable={props.navigatable}
    />
    <CreateNewAvatarAvatarImage
      handleClick={() => props.handleImageClick(props.image)}
      image={props.image}
      navigatable
    />
    <CreateNewAvatarAutomation
      automation={props.automation}
      handleChange={props.handleAutomationChange}
      navigatable={props.navigatable}
    />
    <CreateNewAvatarAvatarLanguage
      handleChange={props.handleLanguageChange}
      language={props.language}
      navigatable={props.navigatable}
    />
  </div>
)
CreateNewRobotAvatarTable.displayName = 'CreateNewRobotAvatarTable'
