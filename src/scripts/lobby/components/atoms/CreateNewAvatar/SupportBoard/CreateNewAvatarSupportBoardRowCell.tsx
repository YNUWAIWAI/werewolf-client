import * as React from 'react'

interface Props {
  readonly className: string
  readonly support: boolean
}

export default function CreateNewAvatarSupportBoardRowCell(props: Props) {
  return (
    <div
      className={props.className}
    >
      {props.support ? '✅' : '❌'}
    </div>
  )
}
