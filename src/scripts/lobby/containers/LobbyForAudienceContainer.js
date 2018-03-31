// @flow
import LobbyForAudience, {type DispatchProps, type StateProps} from '../components/LobbyForAudience'
import {type SelectVillage, selectVillage} from '../actions'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => state.lobbyForAudience
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})
const LobbyForAudienceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyForAudience)

export default LobbyForAudienceContainer
