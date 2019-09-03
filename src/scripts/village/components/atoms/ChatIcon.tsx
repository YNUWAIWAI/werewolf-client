import * as React from 'react'
import * as village from 'types/village'
import Audience from './svg/Audience'
import Grave from './svg/Grave'
import Master from './svg/Master'
import Private from './svg/Private'
import Public from './svg/Public'
import Werewolf from './svg/Werewolf'

export interface Props {
  readonly channel: village.Channel
  readonly className: string
}

export default function ChatIcon(props: Props) {
  switch (props.channel) {
    case village.Channel.anonymousAudience:
    case village.Channel.onymousAudience:
      return (
        <div className={props.className}>
          <Audience />
        </div>
      )
    case village.Channel.grave:
      return (
        <div className={props.className}>
          <Grave />
        </div>
      )
    case village.Channel.hunter:
    case village.Channel.seer:
    case village.Channel.werewolf:
      return (
        <div className={props.className}>
          <Werewolf />
        </div>
      )
    case village.Channel.master:
      return (
        <div className={props.className}>
          <Master />
        </div>
      )
    case village.Channel.private:
      return (
        <div className={props.className}>
          <Private />
        </div>
      )
    case village.Channel.public:
      return (
        <div className={props.className}>
          <Public />
        </div>
      )
    default:
      return (
        <div className={props.className} />
      )
  }
}
