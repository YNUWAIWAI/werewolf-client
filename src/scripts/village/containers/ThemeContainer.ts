import Component, {StateProps} from '../components/organisms/Theme'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  theme: state.theme
})

const Container = connect(
  mapStateToProps
)(Component)

export default Container
