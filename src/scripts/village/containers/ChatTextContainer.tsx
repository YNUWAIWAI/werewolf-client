import {
  ChatText as Component,
  StateProps
} from '../components/atoms/ChatText'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  navigatable: !state.obfucator.visible
})

export const ChatTextContainer = connect(
  mapStateToProps
)(Component)
