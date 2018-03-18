// @flow
import AgentIcon from './AgentIcon'
import Description from './Description'
import React from 'react'

export type StateProps = {
  +id: number,
  +image: string,
  +name: string,
  +text: string,
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
  if (!props.visible) {
    return ''
  }

  const handleClick = value => () => {
    if (value === 'no') {
      props.handleClickNo()
    } else {
      props.handleClickYes(props.id)
    }
  }

  return (
    <div className="modal">
      <AgentIcon class="modal--icon" image={props.image} name={props.name} />
      <Description class="modal--description" text={props.text} />
      <div className="modal--button--container">
        <button className="modal--button" onClick={handleClick('yes')} value="yes">
          {'はい'}
        </button>
        <button className="modal--button" onClick={handleClick('no')} value="no">
          {'いいえ'}
        </button>
      </div>
    </div>
  )
}
