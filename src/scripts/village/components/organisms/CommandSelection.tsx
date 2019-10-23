import * as React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import AgentIcon from '../atoms/AgentIcon'
import Description from '../molecules/Description'
import {village} from '../../types'

export interface StateProps {
  readonly agents: {
    readonly id: village.AgentId
    readonly image: string
    readonly initial: string
    readonly name: string
  }[]
  readonly descriptionId: string
  readonly fixed: boolean
  readonly phase: village.Phase
}
export interface DispatchProps {
  readonly handleSelectOption: (agentId: village.AgentId) => () => void
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
            .map(a => (
              <CSSTransition
                appear
                classNames="vi--command--selection--option--transition"
                key={`${a.id}${props.phase}`}
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
                  initial={a.initial}
                  name={a.name}
                />
              </CSSTransition>
            ))
        }
      </TransitionGroup>
    </div>
  )
}
