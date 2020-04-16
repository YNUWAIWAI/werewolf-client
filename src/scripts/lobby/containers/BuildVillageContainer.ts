import * as ActionTypes from '../constants/ActionTypes'
import Component, {StateProps} from '../components/templates/BuildVillage'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  const menuItems = (() => {
    const keys: (keyof ReducerState['buildVillage']['validity'])[] = ['avatar', 'comment', 'numberOfPlayers', 'numberOfRobots', 'villageName']

    if (keys.every(key => state.buildVillage.validity[key])) {
      return state.buildVillage.menuItems
    }

    return state.buildVillage.menuItems.map(item => {
      if (item.types.includes(ActionTypes.BuildVillage.BUILD)) {
        return {
          ... item,
          disabled: true
        }
      }

      return item
    })
  })()

  return {
    image: state.buildVillage.image,
    menuItems,
    name: state.buildVillage.name
  }
}
const Container = connect(
  mapStateToProps
)(Component)

export default Container
