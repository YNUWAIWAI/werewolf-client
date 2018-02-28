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

const mapStateToProps = state => Object.assign(
  {},
  state.modal,
  {
    text: getText(state.base.phase, state.mine.myRole)
  }
)
const mapDispatchToProps = dispatch => ({
  handleClickNo: () => dispatch(selectNo()),
  handleClickYes: selectedAgent => dispatch(selectYes(selectedAgent))
})
const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default ModalContainer
