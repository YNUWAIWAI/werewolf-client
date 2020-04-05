import * as React from 'react'
import {CSSTransition} from 'react-transition-group'
import ResultCellAvatarImage from '../atoms/ResultCellAvatarImage'
import ResultCellAvatarName from '../atoms/ResultCellAvatarName'
import ResultCellImage from '../atoms/ResultCellImage'
import ResultCellLoserCaption from '../atoms/ResultCellLoserCaption'
import ResultCellName from '../atoms/ResultCellName'
import ResultCellRoleImage from '../atoms/ResultCellRoleImage'
import ResultCellStatus from '../atoms/ResultCellStatus'
import ResultCellSummary from '../atoms/ResultCellSummary'
import ResultCellWinnerCaption from '../atoms/ResultCellWinnerCaption'
import ResultHeader from '../atoms/ResultHeader'
import {village} from '../../types'

export interface StateProps {
  readonly characters: {
    [characterId in village.CharacterId]: {
      readonly avatarImage: string
      readonly avatarName: string
      readonly characterName: string
      readonly characterImage: string
      readonly characterInitial: string
      readonly characterId: village.CharacterId
      readonly result: village.Result
      readonly roleImage: string
      readonly roleName: string
      readonly status: village.CharacterStatus
    }
  }
  readonly losers: village.CharacterId[]
  readonly me: village.CharacterId | null
  readonly summary: {
    readonly loserTeam: Set<village.Team>
    readonly myTeam: village.Team | ''
    readonly winnerTeam: village.Team
  }
  readonly visible: boolean
  readonly winners: village.CharacterId[]
}
export interface DispatchProps {
  readonly handleClickCloseButton: () => void
}
export interface Props extends StateProps, DispatchProps {}

const getRow = (character: Props['characters'][village.CharacterId]) => [
  <ResultCellImage
    image={character.characterImage}
    initial={character.characterInitial}
    key={`${character.characterId}image`}
    status={character.status}
  />,
  <ResultCellName
    key={`${character.characterId}name`}
    status={character.status}
    text={character.characterName}
  />,
  <ResultCellStatus
    key={`${character.characterId}status`}
    status={character.status}
  />,
  <ResultCellRoleImage
    image={character.roleImage}
    key={`${character.characterId}roleImage`}
    name={character.roleName}
    status={character.status}
  />,
  <ResultCellAvatarImage
    image={character.avatarImage}
    key={`${character.characterId}avatarImage`}
    status={character.status}
  />,
  <ResultCellAvatarName
    key={`${character.characterId}avatarName`}
    status={character.status}
    text={character.avatarName}
  />
]

export default function Result(props: Props) {
  const me = (() => {
    if (typeof props.me === 'undefined' || props.me === null) {
      return []
    }

    return getRow(props.characters[props.me])
  })()
  const compareCharacterName = (a: village.CharacterId, b: village.CharacterId) => {
    const characters = props.characters

    if (characters[a].characterName < characters[b].characterName) {
      return -1
    }
    if (characters[a].characterName > characters[b].characterName) {
      return 1
    }

    return 0
  }
  const compareStatus = (a: village.CharacterId, b: village.CharacterId) => {
    const characters = props.characters

    if (characters[a].status === village.CharacterStatus.alive && characters[b].status === village.CharacterStatus.alive) {
      return 0
    }
    if (characters[a].status !== village.CharacterStatus.alive && characters[b].status === village.CharacterStatus.alive) {
      return 1
    }
    if (characters[a].status === village.CharacterStatus.alive && characters[b].status !== village.CharacterStatus.alive) {
      return -1
    }

    return 0
  }
  const losers = props.losers
    .sort(compareCharacterName)
    .sort(compareStatus)
    .map(id => getRow(props.characters[id]))

  const winners = [... props.winners]
    .sort(compareCharacterName)
    .sort(compareStatus)
    .map(id => getRow(props.characters[id]))

  return (
    <CSSTransition
      classNames="vi--result--transition"
      in={props.visible}
      timeout={{
        enter: 500,
        exit: 300
      }}
      unmountOnExit
    >
      <div className="vi--result">
        {
          [
            <ResultHeader
              handleClick={props.handleClickCloseButton}
              key="close"
            />,
            <ResultCellSummary
              key="summary"
              myTeam={props.summary.myTeam}
              winnerTeam={props.summary.winnerTeam}
            />,
            me,
            <ResultCellWinnerCaption
              key="caption winners"
              team={props.summary.winnerTeam}
            />,
            ... winners,
            <ResultCellLoserCaption
              key="caption losers"
              team={props.summary.loserTeam}
            />,
            ... losers
          ]
        }
      </div>
    </CSSTransition>
  )
}
