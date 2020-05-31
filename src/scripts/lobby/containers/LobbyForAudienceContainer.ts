import {
  LobbyForAudience as Component,
  DispatchProps,
  StateProps
} from '../components/templates/LobbyForAudience'
import {
  SelectVillage,
  selectVillage
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => state.lobbyForAudience
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})

export const LobbyForAudienceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
