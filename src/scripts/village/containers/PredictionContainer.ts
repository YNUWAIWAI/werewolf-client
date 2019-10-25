import {
  ChangePredictionBoard,
  HidePredictionSpec,
  ShowPredictionSpec,
  handleBoardClick,
  hidePredictionSpec,
  showPredictionSpec
} from '../actions'
import Prediction, {DispatchProps, StateProps} from '../components/organisms/Prediction'
import {getInitial, getText} from '../util'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ChangePredictionBoard
  | HidePredictionSpec
  | ShowPredictionSpec

const mapStateToProps = (state: ReducerState): StateProps => ({
  playerStatus: state.prediction.playerStatus.allIds.map(agentId => {
    const player = state.prediction.playerStatus.byId[agentId]
    const isChatted = state.chat.allIds.some(chatId => {
      const chatItem = state.chat.byId[chatId]

      return (
        chatItem.type === 'item' &&
        chatItem.date === state.base.date &&
        chatItem.agentId === agentId
      )
    })
    const isSilent = !isChatted

    return {
      id: player.id,
      image: player.image,
      initial: getInitial(player.name.en),
      isSilent,
      name: getText({
        language: state.language,
        languageMap: player.name
      }),
      status: player.status
    }
  }),
  roleStatus: state.prediction.roleStatus.allIds.map(roleId => {
    const role = state.prediction.roleStatus.byId[roleId]

    if (!role) {
      throw Error(`${roleId} is undefined in prediction.roleStatus.byId`)
    }

    return {
      id: role.id,
      image: role.image,
      name: getText({
        language: state.language,
        languageMap: role.name
      }),
      numberOfCharacters: role.numberOfCharacters
    }
  }),
  spec: state.prediction.spec,
  table: state.prediction.table
})

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleBoardClick: (playerId, roleId) => nextState => {
    dispatch(handleBoardClick(nextState, playerId, roleId))
  },
  handleMouseEnter: role => () => {
    dispatch(showPredictionSpec(role))
  },
  handleMouseLeave: () => {
    dispatch(hidePredictionSpec())
  }
})

const PredictionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Prediction)

export default PredictionContainer
