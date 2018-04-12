// @flow
import Result, {type StateProps} from '../components/Result'
import type {ReducerState} from '../reducers'
import {WEREWOLF_SIDE} from '../constants/Role'
import {connect} from 'react-redux'
import {xor} from '../util'

const mapStateToProps = (state: ReducerState): StateProps => {
  const rows = state.result.agents.map(a => ({
    agentId: a.agentId,
    agentImage: a.agentImage,
    agentName: a.agentName.ja,
    result: a.result,
    roleImage: a.roleImage,
    roleName: a.roleName.ja,
    status: a.status,
    userAvatar: a.userAvatar,
    userName: a.userName
  }))
  const summary = (() => {
    const isWerewolfSide = WEREWOLF_SIDE.includes(state.result.summary.role)
    const isWin = state.result.summary.result === 'win'

    if (state.result.summary.isPlayer) {
      const text = `人間側の${xor(isWerewolfSide, isWin) ? '勝利' : '敗北'}のため，あなたは${isWin ? '勝ち' : '負け'}ました`

      return text
    }
    const text = `人間側が${xor(isWerewolfSide, isWin) ? '勝利' : '敗北'}しました`

    return text
  })()

  return {
    rows,
    summary,
    visible: state.result.visible
  }
}
const ResultContainer = connect(
  mapStateToProps
)(Result)

export default ResultContainer
