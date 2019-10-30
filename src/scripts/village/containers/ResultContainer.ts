import {
  HideResult,
  hideResult
} from '../actions'
import Result, {
  DispatchProps,
  StateProps
} from '../components/organisms/Result'
import {
  getInitial,
  getText
} from '../util'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {village} from '../types'
type Action =
  | HideResult

const mapStateToProps = (state: ReducerState): StateProps => {
  const characters: StateProps['characters'] = {}

  state.result.allIds.forEach(id => {
    const a = state.result.characters[id]

    characters[id] = {
      avatarImage: a.avatarImage,
      avatarName: a.avatarName,
      characterId: a.characterId,
      characterImage: a.characterImage,
      characterInitial: getInitial(a.characterName.en),
      characterName: getText({
        language: state.language,
        languageMap: a.characterName
      }),
      result: a.result,
      roleImage: a.roleImage,
      roleName: getText({
        language: state.language,
        languageMap: a.roleName
      }),
      status: a.status
    }
  })
  const myTeam = state.result.summary.kind === village.SummaryType.audience ? '' : state.result.summary.myTeam // '' => 'audience'
  const summary: StateProps['summary'] = {
    loserTeam: state.result.summary.loserTeam,
    myTeam,
    winnerTeam: state.result.summary.winnerTeam
  }

  return {
    characters,
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
