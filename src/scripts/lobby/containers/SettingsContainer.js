// @flow
import Settings, {type StateProps} from '../components/Settings'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => state.settings
const SettingsContainer = connect(
  mapStateToProps
)(Settings)

export default SettingsContainer
