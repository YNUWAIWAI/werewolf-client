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
    const isWerewolfSide = WEREWOLF_SIDE.includes(state.result.summary.role)
    const isWin = state.result.summary.result === 'win'
    const description = (() => {
      if (state.result.summary.isPlayer) {
        return `Result.summary.description(player, villager${xor(isWerewolfSide, isWin) ? 'Win' : 'Lose'}, you${isWin ? 'Win' : 'Lose'})`
      }

      return `Result.summary.description(audience, villager${xor(isWerewolfSide, isWin) ? 'Win' : 'Lose'})`
    })()

    if (xor(isWerewolfSide, isWin)) {
      return {
        description,
        loser: `Result.summary.loser(werewolf${state.result.werehumster.exists && !state.result.werehumster.isWin ? ', werehumster' : ''})`,
        winner: `Result.summary.winner(villager${state.result.werehumster.exists && state.result.werehumster.isWin ? ', werehumster' : ''})`
      }
    }

    return {
      description,
      loser: `Result.summary.loser(villager${state.result.werehumster.exists && !state.result.werehumster.isWin ? ', werehumster' : ''})`,
      winner: `Result.summary.winner(werewolf${state.result.werehumster.exists && state.result.werehumster.isWin ? ', werehumster' : ''})`
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
