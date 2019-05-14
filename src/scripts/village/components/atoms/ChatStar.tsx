import * as React from 'react'
import Star from './svg/Star'

interface Props {
  readonly handleStar: () => void
  readonly isMarked: boolean
}

export default function ChatNum(props: Props) {
  return (
    <div
      className={`vi--chat--star ${props.isMarked ? 'marked' : ''}`}
      onClick={() => props.handleStar()}
    >
      <Star />
    </div>
  )
}
