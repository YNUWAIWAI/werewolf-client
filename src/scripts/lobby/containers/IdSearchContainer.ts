import IdSearch, {
  DispatchProps,
  StateProps
} from '../components/templates/IdSearch'
import {
  IdSearch$ChangeSearchId,
  IdSearch$ChangeValidity,
  SelectVillage,
  idSearch,
  selectVillage
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {Scope} from '../constants/ActionTypes'
import {connect} from 'react-redux'

type Action =
  | IdSearch$ChangeSearchId
  | IdSearch$ChangeValidity
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => state.idSearch
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleSearchIdChange: id => {
    dispatch(idSearch.changeSearchId(id))
  },
  handleValidityChange: validity => {
    dispatch(idSearch.changeValidity('id')(validity))
  },
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})
const IdSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IdSearch)

export default IdSearchContainer
