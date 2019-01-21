import {HideResult, hideResult} from '../actions'
import Result, {DispatchProps, StateProps} from '../components/organisms/Result'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getText} from '../util'

type Action =
  | HideResult

const mapStateToProps = (state: ReducerState): StateProps => {
  const agents: StateProps['agents'] = {}

  state.result.allIds.forEach(id => {
    const a = state.result.agents[id]

    agents[id] = {
      agentId: a.agentId,
      agentImage: a.agentImage,
      agentName: getText({
        language: state.language,
        languageMap: a.agentName
      }),
      avatarImage: a.avatarImage,
      avatarName: a.avatarName,
      result: a.result,
      roleImage: a.roleImage,
      roleName: getText({
        language: state.language,
        languageMap: a.roleName
      }),
      status: a.status
    }
  })
  const myTeam = state.result.summary.kind === 'audience' ? '' : state.result.summary.myTeam // '' => 'audience'
  const summary: StateProps['summary'] = {
    description: {
      loser: `Result.summary.loser(${state.result.summary.loserTeam.size})`,
      summary: state.result.summary.kind === 'player' ?
        `Result.summary.description(player, ${state.result.summary.result})` :
        'Result.summary.description(audience)',
      winner: 'Result.summary.winner'
    },
    loserTeam: state.result.summary.loserTeam,
    myTeam,
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