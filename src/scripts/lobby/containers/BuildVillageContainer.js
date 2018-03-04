import BuildVillage from '../components/BuildVillage'
import {connect} from 'react-redux'

const mapStateToProps = state => state.buildVillage
const BuildVillageContainer = connect(
  mapStateToProps
)(BuildVillage)

export default BuildVillageContainer
