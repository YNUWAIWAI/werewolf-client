// @flow
import * as ActionTypes from '../constants/ActionTypes'
import AdvancedSearch, {type DispatchProps, type StateProps} from '../components/AdvancedSearch'
import {
  type AdvancedSearch$ChangeAvatar,
  type AdvancedSearch$ChangeCheckbox,
  type AdvancedSearch$ChangeComment,
  type AdvancedSearch$ChangeHostName,
  type AdvancedSearch$ChangeMaximum,
  type AdvancedSearch$ChangeMinimum,
  type AdvancedSearch$ChangeValidity,
  type AdvancedSearch$ChangeVillageName,
  type SelectVillage,
  changeAvatar,
  changeCheckbox,
  changeComment,
  changeHostName,
  changeMaximum,
  changeMinimum,
  changeValidity,
  changeVillageName,
  selectVillage
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
  | AdvancedSearch$ChangeValidity
  | AdvancedSearch$ChangeVillageName
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => {
  const menuItems = (() => {
    if (
      Object.keys(state.advancedSearch.checked)
        .filter(key => state.advancedSearch.checked[key])
        .every(key => state.advancedSearch.validity[key])
    ) {
      return state.advancedSearch.menuItems
    }

    return state.advancedSearch.menuItems.map(item => {
      if (item.types.includes(ActionTypes.ADVANCED_SEARCH)) {
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
    validity: state.advancedSearch.validity,
    villageItems: state.advancedSearch.villageItems
  }
}
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
  },
  handleValidityChange: propName => validity => {
    dispatch(changeValidity('advancedSearch')(propName)(validity))
  },
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})
const AdvancedSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedSearch)

export default AdvancedSearchContainer
