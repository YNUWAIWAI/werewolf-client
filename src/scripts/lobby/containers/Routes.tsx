import * as React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import AdvancedSearch from './AdvancedSearchContainer'
import BuildVillage from './BuildVillageContainer'
import CreateNewHumanAvatar from './CreateNewHumanAvatarContainer'
import CreateNewRobotAvatar from './CreateNewRobotAvatarContainer'
// import ConnectingToRobotPlayer from './ConnectingToRobotPlayerContainer'
import History from './HistoryContainer'
import IdSearch from './IdSearchContainer'
import LobbyForAudience from './LobbyForAudienceContainer'
import LobbyForHumanPlayer from './LobbyForHumanPlayerContainer'
import LobbyForRobotPlayer from './LobbyForRobotPlayerContainer'
import Main from './MainContainer'
import SelectHumanAvatar from './SelectHumanAvatarContainer'
import SelectRobotAvatar from './SelectRobotAvatarContainer'
import Settings from './SettingsContainer'
import WaitingForPlayers from './WaitingForPlayersContainer'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/history">
        <History />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/audience/lobby">
        <LobbyForAudience />
      </Route>
      <Route path="/human/selectAvatar">
        <SelectHumanAvatar />
      </Route>
      <Route path="/robot/selectAvatar">
        <SelectRobotAvatar />
      </Route>
      <Route path="/human/lobby">
        <LobbyForHumanPlayer />
      </Route>
      <Route path="/robot/lobby">
        <LobbyForRobotPlayer />
      </Route>
      <Route path="/human/createNewAvatar">
        <CreateNewHumanAvatar />
      </Route>
      <Route path="/robot/createNewAvatar">
        <CreateNewRobotAvatar />
      </Route>
      <Route path={
        [
          '/audience/advancedSearch',
          '/human/advancedSearch',
          '/robot/advancedSearch'
        ]
      }
      >
        <AdvancedSearch />
      </Route>
      <Route path={
        [
          '/human/buildVillage',
          '/robot/buildVillage'
        ]
      }
      >
        <BuildVillage />
      </Route>
      <Route path={
        [
          '/audience/idSearch',
          '/human/idSearch',
          '/robot/idSearch'
        ]
      }
      >
        <IdSearch />
      </Route>
      <Route path={
        [
          '/audience/waitingForPlayers',
          '/human/waitingForPlayers',
          '/robot/waitingForPlayers'
        ]
      }
      >
        <WaitingForPlayers />
      </Route>
      <Route>
        <Main />
      </Route>
    </Switch>
  )
}
