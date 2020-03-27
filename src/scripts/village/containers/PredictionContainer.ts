import {
  ChangePredictionBoard,
  HidePredictionSpec,
  ShowPredictionSpec,
  handleBoardClick,
  hidePredictionSpec,
  showPredictionSpec
} from '../actions'
import Prediction, {
  DispatchProps,
  StateProps
} from '../components/organisms/Prediction'
import {
  getInitial,
  getText
} from '../util'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {village} from '../types'

type Action =
  | ChangePredictionBoard
  | HidePredictionSpec
  | ShowPredictionSpec

const mapStateToProps = (state: ReducerState): StateProps => ({
  characterStatus: state.prediction.characterStatus.allIds.map(characterId => {
    const character = state.prediction.characterStatus.byId[characterId]
    const isChatted = state.chat.allIds.some(chatId => {
      const chatItem = state.chat.byId[chatId]

      return (
        chatItem.type === village.ChatItemType.item &&
        chatItem.day === state.base.day &&
        chatItem.characterId === characterId
      )
    })
    const isSilent = !isChatted

    return {
      id: character.id,
      image: character.image,
      initial: getInitial(character.name.en),
      isSilent,
      name: getText({
        language: state.language,
        languageMap: character.name
      }),
      status: character.status
    }
  }),
  expand: state.hideButton.hide,
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
      numberOfPlayers: role.numberOfPlayers
    }
  }),
  spec: state.prediction.spec,
  table: state.prediction.table
})

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleBoardClick: ({characterId, roleId}) => nextState => {
    dispatch(
      handleBoardClick({
        characterId,
        nextState,
        roleId
      })
    )
  },
  handleMouseEnter: role => position => {
    dispatch(showPredictionSpec(role, position))
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
