import {
  AvatarImageSelect,
  avatarImageSelect
} from '../actions'
import Component, {
  DispatchProps,
  StateProps
} from '../components/organisms/AvatarImageSelect'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | AvatarImageSelect.CloseModal
  | AvatarImageSelect.SelectAvatar

const mapStateToProps = (state: ReducerState): StateProps => ({
  imageList: state.avatarImageList.imageList,
  selectedImage: state.avatarImageList.selectedImage
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleCloseButtonClick: () => {
    dispatch(avatarImageSelect.closeModal())
  },
  handleImageSelect: image => {
    dispatch(avatarImageSelect.selectAvatar(image))
  }
})

const AvatarImageSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default AvatarImageSelectContainer
