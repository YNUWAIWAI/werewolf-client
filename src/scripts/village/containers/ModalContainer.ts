import {
  Modal as Component,
  DispatchProps,
  StateProps
} from '../components/organisms/Modal'
import {
  SelectNo,
  SelectYes,
  selectNo,
  selectYes
} from '../actions'
import {
  getInitial,
  getText,
  just
} from '../util'
import {Dispatch} from 'redux'
import {ImagePath} from '../constants/ImagePath'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {village} from '../types'

type Action =
  | SelectNo
  | SelectYes

const getDescriptionId = (phase: village.Phase, role: village.RoleId) => {
  if (phase === village.Phase.noon) {
    return 'Modal.Description.noonVote'
  }

  switch (role) { // phase === NIGHT
    case village.RoleId.hunter:
      return 'Modal.Description.hunterVote'
    case village.RoleId.seer:
      return 'Modal.Description.seerVote'
    case village.RoleId.werewolf:
      return 'Modal.Description.werewolfVote'
    default:
      return 'Modal.Description.wait'
  }
}

const mapStateToProps = (state: ReducerState): StateProps => {
  const selectedCharacterId = state.commandSelection.allIds.find(characterId => characterId === state.modal.id)

  if (typeof selectedCharacterId === 'undefined') {
    return {
      descriptionId: 'Modal.Description.wait',
      id: '',
      image: ImagePath.Character.anonymous,
      initial: '',
      name: '',
      visible: state.modal.visible
    }
  }

  const selectedCharacter = state.commandSelection.byId[selectedCharacterId]
  const myRole = just(state.mine.role)

  return {
    descriptionId: getDescriptionId(state.base.phase, myRole.id),
    id: selectedCharacter.id,
    image: selectedCharacter.image,
    initial: getInitial(selectedCharacter.name.en),
    name: getText({
      language: state.language,
      languageMap: selectedCharacter.name
    }),
    visible: state.modal.visible
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClickNo: () => {
    dispatch(selectNo())
  },
  handleClickYes: selectedCharacter => {
    dispatch(selectYes(selectedCharacter))
  }
})

export const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
