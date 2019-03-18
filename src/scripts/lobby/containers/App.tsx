import * as React from 'react'
import AdvancedSearch from './AdvancedSearchContainer'
import BuildVillage from './BuildVillageContainer'
import ConnectingToRobotPlayer from './ConnectingToRobotPlayerContainer'
import {Content} from '../reducers/app'
import History from './HistoryContainer'
import IdSearch from './IdSearchContainer'
import IntlProvider from './IntlProviderContainer'
import LobbyForAudience from './LobbyForAudienceContainer'
import LobbyForHumanPlayer from './LobbyForHumanPlayerContainer'
import LobbyForRobotPlayer from './LobbyForRobotPlayerContainer'
import Main from './MainContainer'
import Modal from './ModalContainer'
import Obfucator from './ObfucatorContainer'
import {ReducerState} from '../reducers'
import Settings from './SettingsContainer'
import WaitingForPlayers from './WaitingForPlayersContainer'
import {connect} from 'react-redux'

interface StateProps {
  readonly content: React.ReactElement<unknown>
}

const mapStateToProps = (state: ReducerState): StateProps => {
  switch (state.app.content) {
    case Content.AdvancedSearch:
      return {
        content: <AdvancedSearch />
      }
    case Content.BuildVillage:
      return {
        content: <BuildVillage />
      }
    case Content.ConnectingToRobotPlayer:
      return {
        content: <ConnectingToRobotPlayer />
      }
    case Content.History:
      return {
        content: <History />
      }
    case Content.IdSearch:
      return {
        content: <IdSearch />
      }
    case Content.LobbyForAudience:
      return {
        content: <LobbyForAudience />
      }
    case Content.LobbyForHumanPlayer:
      return {
        content: <LobbyForHumanPlayer />
      }
    case Content.LobbyForRobotPlayer:
      return {
        content: <LobbyForRobotPlayer />
      }
    case Content.Settings:
      return {
        content: <Settings />
      }
    case Content.WaitingForPlayers:
      return {
        content: <WaitingForPlayers />
      }
    case Content.Main:
    default:
      return {
        content: <Main />
      }
  }
}

export default connect(
  mapStateToProps
)(
  function App(props: StateProps) {
    return (
      <IntlProvider>
        <>
          {props.content}
          <Obfucator />
          <Modal />
        </>
      </IntlProvider>
    )
  }
)
