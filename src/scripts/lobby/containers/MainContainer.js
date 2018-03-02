import Main from '../components/Main'
import {connect} from 'react-redux'

const mapStateToProps = state => state.main

const MainContainer = connect(
  mapStateToProps
)(Main)

export default MainContainer
