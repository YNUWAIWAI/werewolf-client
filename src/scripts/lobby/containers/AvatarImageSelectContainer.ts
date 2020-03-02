import AvatarImageSelect, {
  DispatchProps,
  StateProps
} from '../components/organisms/AvatarImageSelect'
import {
  SelectAvatarImage$CloseModal,
  SelectAvatarImage$SelectAvatar,
  selectAvatarImage
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectAvatarImage$CloseModal
  | SelectAvatarImage$SelectAvatar

const mapStateToProps = (state: ReducerState): StateProps => ({
  imageList: state.avatarImageList.imageList,
  selectedImage: state.avatarImageList.selectedImage
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleCloseButtonClick: () => {
    dispatch(selectAvatarImage.closeModal())
  },
  handleImageSelect: image => {
    dispatch(selectAvatarImage.selectAvatar(image))
  }
})

const AvatarImageSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AvatarImageSelect)

export default AvatarImageSelectContainer
