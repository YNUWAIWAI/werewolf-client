// @flow
import React from 'react'

type Props = {
  +id?: number,
  +intensionalDisclosureRange: Channel
}

export default function ChatNum(props: Props) {
  return (
    <div className="chat--num">
      {
        props.intensionalDisclosureRange === 'public' && props.id ?
          props.id :
          ''
      }
    </div>
  )
}
