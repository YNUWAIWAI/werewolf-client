import * as React from 'react'

interface Props {
  readonly className: string
  readonly support: boolean
}

export const CreateNewAvatarSupportBoardRowCell: React.FC<Props> = props => (
  <div
    className={props.className}
  >
    {props.support ? '✅' : ''}
  </div>
)
CreateNewAvatarSupportBoardRowCell.displayName = 'CreateNewAvatarSupportBoardRowCell'
