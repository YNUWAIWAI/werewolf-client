import HideButton from '../components/HideButton'
import {connect} from 'react-redux'
import {handleClickHideButton} from '../actions'

const mapStateToProps = state => state.hideButton
const mapDispatchToProps = dispatch => ({
  handleClick: isHide => dispatch(handleClickHideButton(isHide))
})
const HideButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HideButton)

export default HideButtonContainer
