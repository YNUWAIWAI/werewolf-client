import {HUNTER, SEER, WEREWOLF} from '../constants/Role'
import {selectNo, selectYes} from '../actions'
import {DAY_VOTE} from '../constants/Phase'
import Modal from '../components/Modal'
import {connect} from 'react-redux'

const getText = (phase, myRole) => {
  if (phase === DAY_VOTE) {
    return '投票先はこちらでいいですか？'
  }

  switch (myRole['@id']) {
    case WEREWOLF:
      return '襲撃先はこちらでいいですか？'
    case SEER:
      return '占い先はこちらでいいですか？'
    case HUNTER:
      return '守護先はこちらでいいですか？'
    default:
      return '待ってください'
  }
}

const mapStateToProps = state => {
  const agent = state.agent.filter(a => a.id === state.modal.agentId)

  return {
    id: agent.id,
    image: agent.image,
    name: agent.name.ja,
    text: getText(state.base.phase, state.mine.myRole),
    visible: state.modal.visible
  }
}
const mapDispatchToProps = dispatch => ({
  handleClickNo: () => dispatch(selectNo()),
  handleClickYes: selectedAgent => dispatch(selectYes(selectedAgent))
})
const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default ModalContainer
