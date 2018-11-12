// @flow
import {type HideResult, hideResult} from '../actions'
import Result, {type DispatchProps, type StateProps} from '../components/organisms/Result'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {WEREWOLF_SIDE} from '../constants/Role'
import {connect} from 'react-redux'
import {xor} from '../util'

type Action =
  | HideResult

const mapStateToProps = (state: ReducerState): StateProps => {
  const agents = {}

  state.result.allIds.forEach(id => {
    const a = state.result.agents[id]

    agents[id] = {
      agentId: a.agentId,
      agentImage: a.agentImage,
      agentName: a.agentName[state.language],
      result: a.result,
      roleImage: a.roleImage,
      roleName: a.roleName[state.language],
      status: a.status,
      userAvatar: a.userAvatar,
      userName: a.userName
    }
  })
  const summary = (() => {
    const description = (() => {
      if (state.result.summary.kind === 'player') {
        return `Result.summary.description('player', ${state.result.summary.winnerTeam}, ${state.result.summary.myTeam}, ${state.result.summary.result})`
      }

      // state.result.summary.kind === 'audience'
      return `Result.summary.description(audience, ${state.result.summary.winnerTeam})`
    })()
    const loser = (() => {
      const villager = state.result.summary.loserTeam.has('villager')
      const werehamster = state.result.summary.loserTeam.has('werehamster')
      const werewolf = state.result.summary.loserTeam.has('werewolf')

      if (villager && !werehamster && !werewolf) {
        return 'Result.summary.loser(villager)'
      } else if (villager && werehamster && !werewolf) {
        return 'Result.summary.loser(villager, werehamster)'
      } else if (villager && !werehamster && werewolf) {
        return 'Result.summary.loser(villager, werewolf)'
      } else if (!villager && !werehamster && werewolf) {
        return 'Result.summary.loser(werewolf)'
      }

      // !villager && werehamster && werewolf)
      return 'Result.summary.loser(werewolf, werehamster)'
    })()

    return {
      description,
      loser,
      winner: `Result.summary.winner(${state.result.summary.winnerTeam})`
    }
  })()

  return {
    agents,
    losers: state.result.losers,
    me: state.result.me,
    summary,
    visible: state.result.visible,
    winners: state.result.winners
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClickCloseButton: () => {
    dispatch(hideResult())
  }
})
const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)

export default ResultContainer
