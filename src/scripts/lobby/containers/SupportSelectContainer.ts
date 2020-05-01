import Component, {
  DispatchProps,
  StateProps
} from '../components/organisms/SupportSelect'
import {
  SupportSelect,
  supportSelect
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SupportSelect.CloseModal
  | SupportSelect.SelectMember

const mapStateToProps = (state: ReducerState): StateProps => ({
  imageList: state.avatarImageList.imageList,
  selectedImage: state.avatarImageList.selectedImage
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleCloseButtonClick: () => {
    dispatch(supportSelect.closeModal())
  },
  handleSelect: image => {
    dispatch(supportSelect.selectMember(image))
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container
