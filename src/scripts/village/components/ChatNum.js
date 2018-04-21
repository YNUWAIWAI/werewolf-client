// @flow
import type {Channel} from 'village'
import React from 'react'

type Props = {
  +id: number,
  +intensionalDisclosureRange: Channel
}

export default function ChatNum(props: Props) {
  return (
    <div className="chat--num">
      {
        props.intensionalDisclosureRange === 'public' && props.id > 0 ?
          props.id :
          ''
      }
    </div>
  )
}
