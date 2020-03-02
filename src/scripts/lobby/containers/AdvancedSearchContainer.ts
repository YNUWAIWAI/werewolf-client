import * as ActionTypes from '../constants/ActionTypes'
import {
  AdvancedSearch,
  SelectVillage,
  advancedSearch,
  selectVillage
} from '../actions'
import Component, {
  DispatchProps,
  StateProps
} from '../components/templates/AdvancedSearch'
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
  | AdvancedSearch.ChangeValidity
  | AdvancedSearch.ChangeVillageName
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => {
  const menuItems = (() => {
    const keys: (keyof ReducerState['advancedSearch']['checked'])[] = ['avatar', 'comment', 'hostName', 'maximum', 'minimum', 'villageName']

    if (keys.filter(key => state.advancedSearch.checked[key]).every(key => state.advancedSearch.validity[key])) {
      return state.advancedSearch.menuItems
    }

    return state.advancedSearch.menuItems.map(item => {
      if (item.types.includes(ActionTypes.App.ADVANCED_SEARCH)) {
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
    dispatch(advancedSearch.changeAvatar(value))
  },
  handleCheckboxChange: propName => checked => {
    dispatch(advancedSearch.changeCheckbox(propName)(checked))
  },
  handleNumberChange: propName => value => {
    if (propName === 'maximum') {
      dispatch(advancedSearch.changeMaximum(value))
    }
    if (propName === 'minimum') {
      dispatch(advancedSearch.changeMinimum(value))
    }
  },
  handleTextChange: propName => value => {
    if (propName === 'comment') {
      dispatch(advancedSearch.changeComment(value))
    }
    if (propName === 'hostName') {
      dispatch(advancedSearch.changeHostName(value))
    }
    if (propName === 'villageName') {
      dispatch(advancedSearch.changeVillageName(value))
    }
  },
  handleValidityChange: propName => validity => {
    dispatch(advancedSearch.changeValidity(propName)(validity))
  },
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})
const AdvancedSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default AdvancedSearchContainer
