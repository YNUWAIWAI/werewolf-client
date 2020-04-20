import * as React from 'react'
import {CSSTransition} from 'react-transition-group'
import CharacterIcon from '../atoms/CharacterIcon'
import Description from '../molecules/Description'
import {FormattedMessage} from 'react-intl'
import {village} from '../../types'

export interface StateProps {
  readonly descriptionId: string
  readonly id: village.CharacterId
  readonly image: string
  readonly initial: string
  readonly name: string
  readonly visible: boolean
}
export interface DispatchProps {
  readonly handleClickNo: () => void
  readonly handleClickYes: (characterId: village.CharacterId) => void
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
        <CharacterIcon
          className="vi--modal--icon"
          image={props.image}
          initial={props.initial}
          name={props.name}
        />
        <Description
          className="vi--modal--description"
          id={props.descriptionId}
        />
        <button
          className="vi--modal--button yes"
          onClick={() => props.handleClickYes(props.id)}
        >
          <FormattedMessage
            id="Modal.button.yes"
          />
        </button>
        <button
          className="vi--modal--button no"
          onClick={() => props.handleClickNo()}
        >
          <FormattedMessage
            id="Modal.button.no"
          />
        </button>
      </div>
    </CSSTransition>
  )
}
