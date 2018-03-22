// @flow
import {Channels} from '../constants/Channels'
import React from 'react'

type Props = {
  +id?: number,
  +intensionalDisclosureRange: Channel
}

export default function ChatNum(props: Props) {
  return (
    <div className="chat--num">
      {
        Channels[props.intensionalDisclosureRange] === 'public' ?
          props.id :
          ''
      }
    </div>
  )
}
