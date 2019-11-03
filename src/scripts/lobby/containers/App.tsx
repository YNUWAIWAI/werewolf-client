import * as React from 'react'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import {
  Route,
  Router,
  Switch
} from 'react-router-dom'
import AdvancedSearch from './AdvancedSearchContainer'
import BuildVillage from './BuildVillageContainer'
import ConnectingToRobotPlayer from './ConnectingToRobotPlayerContainer'
import {Content} from '../reducers/app'
import {History as H} from 'history'
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

interface StateProps {
  readonly history: H
}

const routes = (
  <Switch>
    <Route path="/:lobbyType/advancedSearch">
      <AdvancedSearch />
    </Route>
    <Route path="/:lobbyType/buildVillage">
      <BuildVillage />
    </Route>
    <Route path="/history">
      <History />
    </Route>
    <Route path="/:lobbyType/idSearch">
      <IdSearch />
    </Route>
    <Route path="/audience/lobby">
      <LobbyForAudience />
    </Route>
    <Route path="/human/lobby">
      <LobbyForHumanPlayer />
    </Route>
    <Route path="/robot/lobby">
      <LobbyForRobotPlayer />
    </Route>
    <Route path="/settings">
      <Settings />
    </Route>
    <Route path="/:lobbyType/waitingForPlayers">
      <WaitingForPlayers />
    </Route>
    <Route path="/">
      <Main />
    </Route>
  </Switch>
)
const mapStateToProps = (state: ReducerState) => {
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

export default function App(props: StateProps) {
  return (
    <IntlProvider>
      <Router history={props.history}>
        <TransitionGroup
          component={null}
        >
          <CSSTransition
            appear
            classNames="lo--app--transition"
            exit={false}
            timeout={100}
            unmountOnExit
          >
            {routes}
          </CSSTransition>
        </TransitionGroup>
        <Obfucator />
        <Modal />
      </Router>
    </IntlProvider>
  )
}
