import * as React from 'react'
import AgentIcon from '../atoms/AgentIcon'
import Description from '../molecules/Description'
import {Props as TimerProps} from '../atoms/Timer'

export interface StateProps {
  readonly agents: {
    readonly id: number
    readonly image: string
    readonly name: string
  }[],
  readonly descriptionId: string
  readonly fixed: boolean
  readonly timer: TimerProps
}
export interface DispatchProps {
  readonly handleSelectOption: (agentId: number) => () => void
}
export interface OwnProps {}
export interface Props extends StateProps, DispatchProps, OwnProps {}

export default function CommandSelection(props: Props) {
  return (
    <div className="command--selection">
      <Description
        class="command--selection--description"
        id={props.descriptionId}
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
