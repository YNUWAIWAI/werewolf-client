import * as ActionTypes from '../constants/ActionTypes'
import {
  ClickNavigationButton,
  HideResult,
  SocketMessage
} from '../actions'
import {
  getPlayableCharacters,
  getTeam,
  just,
  strToCharacterStatus,
  strToRoleId
} from '../util'
import {village} from '../types'

interface AudienceSummary {
  readonly kind: village.SummaryType.audience
  readonly loserTeam: Set<village.Team>
  readonly winnerTeam: village.Team
}
interface CharacterSummary {
  readonly kind: village.SummaryType.character
  readonly loserTeam: Set<village.Team>
  readonly myTeam: village.Team
  readonly result: village.Result
  readonly winnerTeam: village.Team
}
type Summary = AudienceSummary | CharacterSummary

export interface State {
  readonly allIds: village.CharacterId[]
  readonly characters: {
    [id in village.CharacterId]: {
      readonly avatarImage: string
      readonly avatarName: string
      readonly characterImage: string
      readonly characterId: village.CharacterId
      readonly characterName: village.LanguageMap
      readonly result: village.Result
      readonly roleImage: string
      readonly roleName: village.LanguageMap
      readonly status: village.CharacterStatus
    }
  }
  readonly losers: village.CharacterId[]
  readonly me: village.CharacterId | null
  readonly summary: Summary
  readonly visible: boolean
  readonly winners: village.CharacterId[]
}
type Action =
  | ClickNavigationButton
  | SocketMessage
  | HideResult

export const initialState: State = {
  allIds: [],
  characters: {},
  losers: [],
  me: null,
  summary: {
    kind: village.SummaryType.audience,
    loserTeam: new Set(),
    winnerTeam: village.Team.villager
  },
  visible: false,
  winners: []
}
const result = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Navigation.SHOW_RESULT:
      return {
        ... state,
        visible: true
      }
    case ActionTypes.App.HIDE_RESULT:
      return {
        ... state,
        visible: false
      }
    case ActionTypes.Socket.MESSAGE:
      if (
        action.payload['@payload'] === village.Message.systemMessage &&
        action.payload.phase === village.Phase.result
      ) {
        const payload = action.payload
        const characters: State['characters'] = {}
        const allIds: State['allIds'] = []
        const losers: State['losers'] = []
        let me: State['me'] = null
        const winners: State['winners'] = []

        getPlayableCharacters(just(payload.character))
          .forEach(c => {
            const avatar = just(c.avatar)
            const characterId = String(c.id)
            const role = just(c.role)

            characters[characterId] = {
              avatarImage: avatar.image,
              avatarName: avatar.name,
              characterId,
              characterImage: c.image,
              characterName: c.name,
              result: just(c.result),
              roleImage: role.image,
              roleName: role.name,
              status: strToCharacterStatus(c.status)
            }
            if (c.result === village.Result.win) {
              winners.push(characterId)
            }
            if (c.result === village.Result.lose) {
              losers.push(characterId)
            }
            if (c.isMine) {
              me = characterId
            }
            allIds.push(characterId)
          })
        const summary = (() => {
          if (winners.length === 0) {
            throw Error('Unexpected Result: no winners')
          }
          const winnerTeam = getTeam(strToRoleId(characters[winners[0]].roleName.en))
          const loserTeam = new Set(losers.map(loser => getTeam(strToRoleId(characters[loser].roleName.en))))

          if (typeof me === 'string') {
            const characterSummary: CharacterSummary = {
              kind: village.SummaryType.character,
              loserTeam,
              myTeam: getTeam(strToRoleId(characters[me].roleName.en)),
              result: characters[me].result,
              winnerTeam
            }

            return characterSummary
          }
          const audienceSummary: AudienceSummary = {
            kind: village.SummaryType.audience,
            loserTeam,
            winnerTeam
          }

          return audienceSummary
        })()

        return {
          allIds,
          characters,
          losers,
          me,
          summary,
          visible: true,
          winners
        }
      }

      return state
    default:
      return state
  }
}

export default result
