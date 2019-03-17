import * as React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
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
      <TransitionGroup className="vi--command--selection--select">
        {
          props.agents
            .map(a =>
              <CSSTransition
                classNames="vi--command--selection--option--transition"
                key={a.id}
                timeout={{
                  enter: 1000,
                  exit: 400
                }}
                unmountOnExit
              >
                <AgentIcon
                  additionalClass={props.fixed ? 'fixed' : ''}
                  className="vi--command--selection--option"
                  handleOnClick={props.fixed ? undefined : props.handleSelectOption(a.id)}
                  image={a.image}
                  name={a.name}
                />
              </CSSTransition>
            )
        }
      </TransitionGroup>
    </div>
  )
}
