// @flow
import {type HideReuslt, hideReuslt} from '../actions'
import Result, {type DispatchProps, type StateProps} from '../components/Result'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {WEREWOLF_SIDE} from '../constants/Role'
import {connect} from 'react-redux'
import {xor} from '../util'

type Action =
  | HideReuslt

const mapStateToProps = (state: ReducerState): StateProps => {
  const agents = {}

  state.result.allIds.forEach(id => {
    const a = state.result.agents[id]

    agents[id] = {
      agentId: a.agentId,
      agentImage: a.agentImage,
      agentName: a.agentName.ja,
      result: a.result,
      roleImage: a.roleImage,
      roleName: a.roleName.ja,
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
        return `人間側の${xor(isWerewolfSide, isWin) ? '勝利' : '敗北'}のため，あなたは${isWin ? '勝ち' : '負け'}ました`
      }

      return `人間側が${xor(isWerewolfSide, isWin) ? '勝利' : '敗北'}しました`
    })()

    if (xor(isWerewolfSide, isWin)) {
      return {
        description,
        loser: '敗者（人狼チーム）',
        winner: '勝者（人間チーム）'
      }
    }

    return {
      description,
      loser: '敗者（人間チーム）',
      winner: '勝者（人狼チーム）'
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
    dispatch(hideReuslt())
  }
})
const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)

export default ResultContainer
