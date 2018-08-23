// @flow
import AdvancedSearch, {type DispatchProps, type StateProps} from '../components/AdvancedSearch'
import {
  type AdvancedSearch$ChangeAvatar,
  type AdvancedSearch$ChangeCheckbox,
  type AdvancedSearch$ChangeComment,
  type AdvancedSearch$ChangeHostName,
  type AdvancedSearch$ChangeMaximum,
  type AdvancedSearch$ChangeMinimum,
  type AdvancedSearch$ChangeVillageName,
  changeAvatar,
  changeCheckbox,
  changeComment,
  changeHostName,
  changeMaximum,
  changeMinimum,
  changeVillageName
} from '../actions'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | AdvancedSearch$ChangeAvatar
  | AdvancedSearch$ChangeCheckbox
  | AdvancedSearch$ChangeComment
  | AdvancedSearch$ChangeHostName
  | AdvancedSearch$ChangeMaximum
  | AdvancedSearch$ChangeMinimum
  | AdvancedSearch$ChangeVillageName

const mapStateToProps = (state: ReducerState): StateProps => state.advancedSearch
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarChange: value => {
    dispatch(changeAvatar('advancedSearch')(value))
  },
  handleCheckboxChange: propName => checked => {
    dispatch(changeCheckbox('advancedSearch')(propName)(checked))
  },
  handleNumberChange: propName => value => {
    if (propName === 'maximum') {
      dispatch(changeMaximum('advancedSearch')(value))
    }
    if (propName === 'minimum') {
      dispatch(changeMinimum('advancedSearch')(value))
    }
  },
  handleTextChange: propName => value => {
    if (propName === 'comment') {
      dispatch(changeComment('advancedSearch')(value))
    }
    if (propName === 'hostName') {
      dispatch(changeHostName('advancedSearch')(value))
    }
    if (propName === 'villageName') {
      dispatch(changeVillageName('advancedSearch')(value))
    }
  }
})
const AdvancedSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedSearch)

export default AdvancedSearchContainer
