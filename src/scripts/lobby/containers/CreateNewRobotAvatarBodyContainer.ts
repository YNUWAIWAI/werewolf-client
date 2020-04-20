import Component, {
  DispatchProps,
  StateProps
} from '../components/molecules/CreateNewHumanAvatarBody'
import {
  CreateNewRobotAvatar,
  createNewRobotAvatar
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | CreateNewRobotAvatar.ChangeAvatarLangauge
  | CreateNewRobotAvatar.ChangeAvatarName
  | CreateNewRobotAvatar.ShowAvatarImageSelect

const mapStateToProps = (state: ReducerState): StateProps => ({
  image: state.createNewRobotAvatar.image,
  language: state.createNewRobotAvatar.language,
  name: state.createNewRobotAvatar.name,
  navigatable: !state.obfucator.visible
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleImageClick: value => {
    dispatch(createNewRobotAvatar.showAvatarImageSelect(value))
  },
  handleLanguageChange: valid => value => {
    if (valid) {
      dispatch(createNewRobotAvatar.changeAvatarLanguage(value))
    }
  },
  handleNameChange: valid => value => {
    if (valid) {
      dispatch(createNewRobotAvatar.changeAvatarName(value))
    }
  }
})
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container
