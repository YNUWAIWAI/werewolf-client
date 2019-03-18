import * as React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
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
  readonly name: Content
}

const mapStateToProps = (state: ReducerState): StateProps => {
  switch (state.app.content) {
    case Content.AdvancedSearch:
      return {
        content: <AdvancedSearch />,
        name: state.app.content
      }
    case Content.BuildVillage:
      return {
        content: <BuildVillage />,
        name: state.app.content
      }
    case Content.ConnectingToRobotPlayer:
      return {
        content: <ConnectingToRobotPlayer />,
        name: state.app.content
      }
    case Content.History:
      return {
        content: <History />,
        name: state.app.content
      }
    case Content.IdSearch:
      return {
        content: <IdSearch />,
        name: state.app.content
      }
    case Content.LobbyForAudience:
      return {
        content: <LobbyForAudience />,
        name: state.app.content
      }
    case Content.LobbyForHumanPlayer:
      return {
        content: <LobbyForHumanPlayer />,
        name: state.app.content
      }
    case Content.LobbyForRobotPlayer:
      return {
        content: <LobbyForRobotPlayer />,
        name: state.app.content
      }
    case Content.Settings:
      return {
        content: <Settings />,
        name: state.app.content
      }
    case Content.WaitingForPlayers:
      return {
        content: <WaitingForPlayers />,
        name: state.app.content
      }
    case Content.Main:
    default:
      return {
        content: <Main />,
        name: state.app.content
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
          <TransitionGroup
            component={null}
          >
            <CSSTransition
              appear
              classNames="lo--app--transition"
              exit={false}
              key={props.name}
              timeout={100}
              unmountOnExit
            >
              {props.content}
            </CSSTransition>
          </TransitionGroup>
          <Obfucator />
          <Modal />
        </>
      </IntlProvider>
    )
  }
)
