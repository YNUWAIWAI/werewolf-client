import Home from '../components/Home'
import {connect} from 'react-redux'

const mapStateToProps = state => state.home
const HomeContainer = connect(
  mapStateToProps
)(Home)

export default HomeContainer
