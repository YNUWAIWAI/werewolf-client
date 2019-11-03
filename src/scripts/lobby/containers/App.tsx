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
// import ConnectingToRobotPlayer from './ConnectingToRobotPlayerContainer'
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
