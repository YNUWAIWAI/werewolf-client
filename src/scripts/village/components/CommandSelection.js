// @flow
import CommandOption from './CommandOption'
import React from 'react'
import Timer from '../containers/TimerContainer'

export type StateProps = {
  +agents: Agent[],
  +text: string
}
export type DispatchProps = {
  +handleSelectOption: number => void => void
}
export type ownProps = {}
export type Props =
  & StateProps
  & DispatchProps
  & ownProps

export default function CommandSelection(props: Props) {
  return (
    <div className="command--select">
      <div className="command--description">
        <span>
          {props.text}
        </span>
        {'（'}
        <Timer />
        {'）'}
      </div>
      <div className="command--option-container">
        {
          props.agents
            .filter(a => a.isAChoice)
            .map(a =>
              <CommandOption
                agent={a}
                handleSelectOption={props.handleSelectOption(a.id)}
                id={a.id}
                image={a.image}
                key={a.id}
                name={a.name.ja}
              />
            )
        }
      </div>
    </div>
  )
}
