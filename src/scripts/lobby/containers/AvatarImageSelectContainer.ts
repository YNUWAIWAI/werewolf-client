import AvatarImageSelect, {StateProps} from '../components/organisms/AvatarImageSelect'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  imageList: state.avatarImageList.imageList,
  selectedImage: state.avatarImageList.selectedImage
})
const AvatarImageSelectContainer = connect(
  mapStateToProps
)(AvatarImageSelect)

export default AvatarImageSelectContainer
