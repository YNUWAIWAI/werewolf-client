import Menu, {DispatchProps} from '../components/organisms/Menu'
import {
  Transition,
  transition
} from '../actions'
import {Dispatch} from 'redux'
import {connect} from 'react-redux'

type Action =
  | Transition

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  transition: target => {
    dispatch(transition(target))
  }
})
const MenuContainer = connect(
  null,
  mapDispatchToProps
)(Menu)

export default MenuContainer
