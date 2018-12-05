// @flow
import InfoAgent, {type StateProps} from '../components/molecules/InfoAgent'
import {type ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.agents.mine) {
    return {
      image: '',
      name: ''
    }
  }

  return {
    image: state.agents.mine.image,
    name: state.agents.mine.name[state.language]
  }
}

const InfoAgentContainer = connect(
  mapStateToProps
)(InfoAgent)

export default InfoAgentContainer
