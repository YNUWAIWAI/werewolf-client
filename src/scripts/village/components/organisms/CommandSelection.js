// @flow
import AgentIcon from '../atoms/AgentIcon'
import Description from '../molecules/Description'
import React from 'react'
import type {Props as TimerProps} from '../atoms/Timer'

export type StateProps = {
  +agents: {
    +id: number,
    +image: string,
    +name: string
  }[],
  +fixed: boolean,
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
    <div className="command--selection">
      <Description
        class="command--selection--description"
        text={props.text}
        timer={props.timer}
      />
      <div className="command--selection--select ">
        {
          props.fixed ?
            props.agents
              .map(a =>
                <AgentIcon
                  additionalClass="fixed"
                  class="command--selection--option"
                  image={a.image}
                  key={a.id}
                  name={a.name}
                />
              ) :
            props.agents
              .map(a =>
                <AgentIcon
                  class="command--selection--option"
                  handleOnClick={props.handleSelectOption(a.id)}
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
