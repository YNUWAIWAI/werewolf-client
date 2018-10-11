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
        return `人間陣営の${xor(isWerewolfSide, isWin) ? '勝利' : '敗北'}のため，あなたは${isWin ? '勝ち' : '負け'}ました`
      }

      return `人間陣営が${xor(isWerewolfSide, isWin) ? '勝利' : '敗北'}しました`
    })()

    if (xor(isWerewolfSide, isWin)) {
      return {
        description,
        loser: `敗者（人狼陣営${state.result.werehumster.exists && !state.result.werehumster.isWin ? '，ハムスター人間陣営' : ''}）`,
        winner: `勝者（村人陣営${state.result.werehumster.exists && state.result.werehumster.isWin ? '，ハムスター人間陣営' : ''}）`
      }
    }

    return {
      description,
      loser: `敗者（村人陣営${state.result.werehumster.exists && !state.result.werehumster.isWin ? '，ハムスター人間陣営' : ''}）`,
      winner: `勝者（人狼陣営${state.result.werehumster.exists && state.result.werehumster.isWin ? '，ハムスター人間陣営' : ''}）`
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
