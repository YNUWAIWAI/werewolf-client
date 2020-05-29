import * as React from 'react'
import {Star} from './svg/Star'

interface Props {
  readonly handleStar: (isMarked: boolean) => void
  readonly isMarked: boolean
}

export const ChatStar: React.FC<Props> = props => (
  <div
    className={`vi--chat--star ${props.isMarked ? 'marked' : ''}`}
    onClick={() => props.handleStar(!props.isMarked)}
  >
    <Star />
  </div>
)
ChatStar.displayName = 'ChatStar'
