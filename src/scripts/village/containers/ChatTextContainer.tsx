import Component, {StateProps} from '../components/atoms/ChatText'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  navigatable: !state.obfucator.visible
})
const Container = connect(
  mapStateToProps
)(Component)

export default Container
