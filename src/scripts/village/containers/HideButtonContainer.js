import HideButton from '../components/HideButton'
import {connect} from 'react-redux'
import {handleClickHideButton} from '../actions'

const mapStateToProps = state => state.hideButton
const mapDispatchToProps = dispatch => ({
  handleClick: hide => dispatch(handleClickHideButton(hide))
})
const HideButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HideButton)

export default HideButtonContainer
