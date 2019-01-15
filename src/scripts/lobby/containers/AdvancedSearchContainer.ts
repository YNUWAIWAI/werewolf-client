import * as ActionTypes from '../constants/ActionTypes'
import AdvancedSearch, {DispatchProps, PropName, StateProps} from '../components/templates/AdvancedSearch'
import {
  AdvancedSearch$ChangeAvatar,
  AdvancedSearch$ChangeCheckbox,
  AdvancedSearch$ChangeComment,
  AdvancedSearch$ChangeHostName,
  AdvancedSearch$ChangeMaximum,
  AdvancedSearch$ChangeMinimum,
  AdvancedSearch$ChangeValidity,
  AdvancedSearch$ChangeVillageName,
  SelectVillage,
  Transition,
  changeAvatar,
  changeCheckbox,
  changeComment,
  changeHostName,
  changeMaximum,
  changeMinimum,
  changeValidity,
  changeVillageName,
  selectVillage,
  transition
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | AdvancedSearch$ChangeAvatar
  | AdvancedSearch$ChangeCheckbox
  | AdvancedSearch$ChangeComment
  | AdvancedSearch$ChangeHostName
  | AdvancedSearch$ChangeMaximum
  | AdvancedSearch$ChangeMinimum
  | AdvancedSearch$ChangeValidity
  | AdvancedSearch$ChangeVillageName
  | SelectVillage
  | Transition

const mapStateToProps = (state: ReducerState): StateProps => {
  const menuItems = (() => {
    if (
      Object.keys(state.advancedSearch.checked)
        .filter((key: PropName) => state.advancedSearch.checked[key])
        .every((key: PropName) => state.advancedSearch.validity[key])
    ) {
      return state.advancedSearch.menuItems
    }

    return state.advancedSearch.menuItems.map(item => {
      if (item.types.includes(ActionTypes.Target.ADVANCED_SEARCH)) {
        return {
          ... item,
          disabled: true
        }
      }

      return item
    })
  })()

  return {
    checked: state.advancedSearch.checked,
    header: state.advancedSearch.header,
    image: state.advancedSearch.image,
    isPlayer: state.advancedSearch.isPlayer,
    menuItems,
    name: state.advancedSearch.name,
    searched: state.advancedSearch.searched,
    validity: state.advancedSearch.validity,
    villageItems: state.advancedSearch.villageItems
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarChange: value => {
    dispatch(changeAvatar(ActionTypes.Scope.advancedSearch)(value))
  },
  handleCheckboxChange: propName => checked => {
    dispatch(changeCheckbox(ActionTypes.Scope.advancedSearch)(propName)(checked))
  },
  handleNumberChange: propName => value => {
    if (propName === 'maximum') {
      dispatch(changeMaximum(ActionTypes.Scope.advancedSearch)(value))
    }
    if (propName === 'minimum') {
      dispatch(changeMinimum(ActionTypes.Scope.advancedSearch)(value))
    }
  },
  handleTextChange: propName => value => {
    if (propName === 'comment') {
      dispatch(changeComment(ActionTypes.Scope.advancedSearch)(value))
    }
    if (propName === 'hostName') {
      dispatch(changeHostName(ActionTypes.Scope.advancedSearch)(value))
    }
    if (propName === 'villageName') {
      dispatch(changeVillageName(ActionTypes.Scope.advancedSearch)(value))
    }
  },
  handleValidityChange: propName => validity => {
    dispatch(changeValidity(ActionTypes.Scope.advancedSearch)(propName)(validity))
  },
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  },
  transition: target => {
    dispatch(transition(target))
  }
})
const AdvancedSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedSearch)

export default AdvancedSearchContainer
