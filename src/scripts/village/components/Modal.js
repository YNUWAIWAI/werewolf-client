// @flow
import AgentIcon from './AgentIcon'
import Description from './Description'
import React from 'react'
import type {Props as TimerProps} from './Timer'

export type StateProps = {
  +id: number,
  +image: string,
  +name: string,
  +text: string,
  +timer: TimerProps,
  +visible: boolean
}
export type DispatchProps = {
  +handleClickNo: void => void,
  +handleClickYes: number => void
}
export type OwnProps = {}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

export default function Modal(props: Props) {
  const handleClick = value => () => {
    if (value === 'no') {
      props.handleClickNo()
    } else {
      props.handleClickYes(props.id)
    }
  }

  return (
    <div className={`modal ${props.visible ? '' : 'hidden'}`}>
      <AgentIcon class="modal--icon" image={props.image} name={props.name} />
      <Description class="modal--description" text={props.text} timer={props.timer} />
      <button className="modal--button yes" onClick={handleClick('yes')}>
        {'はい'}
      </button>
      <button className="modal--button no" onClick={handleClick('no')}>
        {'いいえ'}
      </button>
    </div>
  )
}
