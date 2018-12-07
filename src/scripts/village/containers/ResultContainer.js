// @flow
import {type HideResult, hideResult} from '../actions'
import Result, {type DispatchProps, type StateProps} from '../components/organisms/Result'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

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
      avatarImage: a.avatarImage,
      avatarName: a.avatarName,
      result: a.result,
      roleImage: a.roleImage,
      roleName: a.roleName[state.language],
      status: a.status
    }
  })
  const summary = {
    description: {
      loser: `Result.summary.loser(${state.result.summary.loserTeam.size})`,
      summary: state.result.summary.kind === 'player' ?
        `Result.summary.description(player, ${state.result.summary.result})` :
        'Result.summary.description(audience)',
      winner: 'Result.summary.winner'
    },
    loserTeam: state.result.summary.loserTeam,
    myTeam: state.result.summary.myTeam || '', // '' => 'audience'
    winnerTeam: state.result.summary.winnerTeam
  }

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
