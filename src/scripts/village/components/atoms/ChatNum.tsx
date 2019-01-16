import * as React from 'react'

interface Props {
  readonly id: number
  readonly intensionalDisclosureRange: village.Channel
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
