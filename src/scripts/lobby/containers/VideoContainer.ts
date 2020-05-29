import {
  Video as Component,
  StateProps
} from '../components/templates/Video'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {lobby} from '../types'

const mapStateToProps = (state: ReducerState): StateProps => ({
  visible: state.theme === lobby.Theme.dark
})

export const VideoContainer = connect(
  mapStateToProps
)(Component)
