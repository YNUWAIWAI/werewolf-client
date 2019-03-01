import {HUNTER, SEER, WEREWOLF} from '../constants/Role'
import Modal, {DispatchProps, StateProps} from '../components/organisms/Modal'
import {SelectNo, SelectYes, selectNo, selectYes} from '../actions'
import {getText, just, strToRoleId} from '../util'
import {DAY} from '../constants/Phase'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectNo
  | SelectYes

const getDescriptionId = (phase: village.Phase, role: village.RoleId) => {
  if (phase === DAY) {
    return 'Modal.Description.dayVote'
  }

  switch (role) { // phase === NIGHT
    case HUNTER:
      return 'Modal.Description.hunterVote'
    case SEER:
      return 'Modal.Description.seerVote'
    case WEREWOLF:
      return 'Modal.Description.werewolfVote'
    default:
      return 'Modal.Description.wait'
  }
}

const mapStateToProps = (state: ReducerState): StateProps => {
  const selectedAgent = state.commandSelection.agents.find(a => a.id === state.modal.id)

  if (!selectedAgent) {
    return {
      descriptionId: 'Modal.Description.wait',
      id: -1,
      image: '',
      name: '',
      visible: state.modal.visible
    }
  }

  const myRole = just(state.mine.role)

  return {
    descriptionId: getDescriptionId(state.base.phase, myRole.id),
    id: selectedAgent.id,
    image: selectedAgent.image,
    name: getText({
      language: state.language,
      languageMap: selectedAgent.name
    }),
    visible: state.modal.visible
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClickNo: () => {
    dispatch(selectNo())
  },
  handleClickYes: selectedAgent => {
    dispatch(selectYes(selectedAgent))
  }
})
const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default ModalContainer
