import * as ActionTypes from '../constants/ActionTypes'
import Component, {
  DispatchProps,
  StateProps
} from '../components/templates/AdvancedSearch'
import {
  SelectVillage,
  selectVillage
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => {
  const menuItems = (() => {
    const keys: (keyof ReducerState['advancedSearch']['checked'])[] = ['avatar', 'comment', 'hostName', 'maximum', 'minimum', 'villageName']

    if (keys.filter(key => state.advancedSearch.checked[key]).every(key => state.advancedSearch.validity[key])) {
      return state.advancedSearch.menuItems
    }

    return state.advancedSearch.menuItems.map(item => {
      if (item.types.includes(ActionTypes.AdvancedSearch.SEARCH)) {
        return {
          ... item,
          disabled: true
        }
      }

      return item
    })
  })()

  return {
    header: state.advancedSearch.header,
    image: state.advancedSearch.image,
    isPlayer: state.advancedSearch.isPlayer,
    menuItems,
    name: state.advancedSearch.name,
    searched: state.advancedSearch.searched,
    villageItems: state.advancedSearch.villageItems
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})
const AdvancedSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default AdvancedSearchContainer
