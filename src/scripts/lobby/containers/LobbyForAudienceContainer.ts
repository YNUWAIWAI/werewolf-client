import LobbyForAudience, {
  DispatchProps,
  StateProps
} from '../components/templates/LobbyForAudience'
import {
  SelectVillage,
  Transition,
  selectVillage,
  transition
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectVillage
  | Transition

const mapStateToProps = (state: ReducerState): StateProps => state.lobbyForAudience
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  },
  transition: target => {
    dispatch(transition(target))
  }
})
const LobbyForAudienceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyForAudience)

export default LobbyForAudienceContainer
