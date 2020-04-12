import {
  AdvancedSearch,
  advancedSearch
} from '../actions'
import Component, {
  DispatchProps,
  StateProps
} from '../components/organisms/AdvancedSearchBox'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | AdvancedSearch.ChangeAvatar
  | AdvancedSearch.ChangeCheckbox
  | AdvancedSearch.ChangeComment
  | AdvancedSearch.ChangeHostName
  | AdvancedSearch.ChangeMaximum
  | AdvancedSearch.ChangeMinimum
  | AdvancedSearch.ChangeVillageName

const mapStateToProps = (state: ReducerState): StateProps => ({
  checked: state.advancedSearch.checked,
  navigatable: !state.obfucator.visible,
  validity: state.advancedSearch.validity
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarChange: valid => value => {
    dispatch(advancedSearch.changeAvatar(valid)(value))
  },
  handleCheckboxChange: propName => checked => {
    dispatch(advancedSearch.changeCheckbox(propName)(checked))
  },
  handleNumberChange: propName => valid => value => {
    if (propName === 'maximum') {
      dispatch(advancedSearch.changeMaximum(valid)(value))
    }
    if (propName === 'minimum') {
      dispatch(advancedSearch.changeMinimum(valid)(value))
    }
  },
  handleTextChange: propName => valid => value => {
    if (propName === 'comment') {
      dispatch(advancedSearch.changeComment(valid && value !== '')(value))
    }
    if (propName === 'hostName') {
      dispatch(advancedSearch.changeHostName(valid && value !== '')(value))
    }
    if (propName === 'villageName') {
      dispatch(advancedSearch.changeVillageName(valid && value !== '')(value))
    }
  }
})
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container
