import * as React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import AgentIcon from '../atoms/AgentIcon'
import Description from '../molecules/Description'
import {village} from '../../types'

export interface StateProps {
  readonly characters: {
    readonly id: village.CharacterId
    readonly image: string
    readonly initial: string
    readonly name: string
  }[]
  readonly descriptionId: string
  readonly fixed: boolean
  readonly phase: village.Phase
}
export interface DispatchProps {
  readonly handleSelectOption: (characterId: village.CharacterId) => () => void
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
          props.characters
            .map(character => (
              <CSSTransition
                appear
                classNames="vi--command--selection--option--transition"
                key={`${character.id}${props.phase}`}
                timeout={{
                  enter: 1000,
                  exit: 400
                }}
                unmountOnExit
              >
                <AgentIcon
                  additionalClass={props.fixed ? 'fixed' : ''}
                  className="vi--command--selection--option"
                  handleOnClick={props.fixed ? undefined : props.handleSelectOption(character.id)}
                  image={character.image}
                  initial={character.initial}
                  name={character.name}
                />
              </CSSTransition>
            ))
        }
      </TransitionGroup>
    </div>
  )
}
