import * as React from 'react'
import AgentIcon from '../atoms/AgentIcon'
import Description from '../molecules/Description'
import {FormattedMessage} from 'react-intl'

export interface StateProps {
  readonly descriptionId: string
  readonly id: number
  readonly image: string
  readonly name: string
  readonly visible: boolean
}
export interface DispatchProps {
  readonly handleClickNo: () => void
  readonly handleClickYes: (agentId: number) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function Modal(props: Props) {
  if (!props.visible) {
    return null
  }

  return (
    <div className="modal">
      <AgentIcon className="modal--icon" image={props.image} name={props.name} />
      <Description className="modal--description" id={props.descriptionId} />
      <FormattedMessage
        id="Modal.button.yes"
      >
        {
          text =>
            <button
              className="modal--button yes"
              onClick={() => props.handleClickYes(props.id)}
            >
              {text}
            </button>
        }
      </FormattedMessage>
      <FormattedMessage
        id="Modal.button.no"
      >
        {
          text =>
            <button
              className="modal--button no"
              onClick={() => props.handleClickNo()}
            >
              {text}
            </button>
        }
      </FormattedMessage>
    </div>
  )
}
