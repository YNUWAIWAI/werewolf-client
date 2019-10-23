import * as React from 'react'
import AgentIcon from '../atoms/AgentIcon'
import {CSSTransition} from 'react-transition-group'
import Description from '../molecules/Description'
import {FormattedMessage} from 'react-intl'
import {village} from '../../types'

export interface StateProps {
  readonly descriptionId: string
  readonly id: village.AgentId
  readonly image: string
  readonly initial: string
  readonly name: string
  readonly visible: boolean
}
export interface DispatchProps {
  readonly handleClickNo: () => void
  readonly handleClickYes: (agentId: village.AgentId) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function Modal(props: Props) {
  return (
    <CSSTransition
      classNames="vi--modal--transition"
      in={props.visible}
      timeout={{
        enter: 500,
        exit: 300
      }}
      unmountOnExit
    >
      <div className="vi--modal">
        <AgentIcon
          className="vi--modal--icon"
          image={props.image}
          initial={props.initial}
          name={props.name}
        />
        <Description
          className="vi--modal--description"
          id={props.descriptionId}
        />
        <FormattedMessage
          id="Modal.button.yes"
        >
          {
            text => (
              <button
                className="vi--modal--button yes"
                onClick={() => props.handleClickYes(props.id)}
              >
                {text}
              </button>
            )
          }
        </FormattedMessage>
        <FormattedMessage
          id="Modal.button.no"
        >
          {
            text => (
              <button
                className="vi--modal--button no"
                onClick={() => props.handleClickNo()}
              >
                {text}
              </button>
            )
          }
        </FormattedMessage>
      </div>
    </CSSTransition>
  )
}
