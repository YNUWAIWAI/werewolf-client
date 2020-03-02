import Component, {StateProps} from '../components/organisms/Modal'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  type: state.modal.type,
  visible: state.modal.visible
})
const ModalContainer = connect(
  mapStateToProps
)(Component)

export default ModalContainer
