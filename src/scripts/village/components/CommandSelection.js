// @flow
import Timer, {type Props as TimerProps} from './Timer'
import CommandOption from './CommandOption'
import React from 'react'

export type StateProps = {
  +agents: {
    +id: number,
    +image: string,
    +name: string
  }[],
  +text: string,
  +timer: TimerProps
}
export type DispatchProps = {
  +handleSelectOption: number => void => void
}
export type OwnProps = {}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

export default function CommandSelection(props: Props) {
  return (
    <div className="command--select">
      <div className="command--description">
        <span>
          {props.text}
        </span>
        {'（'}
        <Timer {... props.timer} />
        {'）'}
      </div>
      <div className="command--option-container">
        {
          props.agents
            .map(a =>
              <CommandOption
                handleSelectOption={props.handleSelectOption(a.id)}
                image={a.image}
                key={a.id}
                name={a.name}
              />
            )
        }
      </div>
    </div>
  )
}
