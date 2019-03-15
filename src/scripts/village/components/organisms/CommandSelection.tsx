import * as React from 'react'
import AgentIcon from '../atoms/AgentIcon'
import Description from '../molecules/Description'

export interface StateProps {
  readonly agents: {
    readonly id: number
    readonly image: string
    readonly name: string
  }[]
  readonly descriptionId: string
  readonly fixed: boolean
}
export interface DispatchProps {
  readonly handleSelectOption: (agentId: number) => () => void
}
export interface Props extends StateProps, DispatchProps {}

export default function CommandSelection(props: Props) {
  return (
    <div className="vi--command--selection">
      <Description
        className="vi--command--selection--description"
        id={props.descriptionId}
      />
      <div className="vi--command--selection--select ">
        {
          props.fixed ?
            props.agents
              .map(a =>
                <AgentIcon
                  additionalClass="fixed"
                  className="vi--command--selection--option"
                  image={a.image}
                  key={a.id}
                  name={a.name}
                />
              ) :
            props.agents
              .map(a =>
                <AgentIcon
                  className="vi--command--selection--option"
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
