import * as React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import {AdvancedSearchContainer as AdvancedSearch} from './AdvancedSearchContainer'
import {BuildVillageContainer as BuildVillage} from './BuildVillageContainer'
import {CreateNewHumanAvatarContainer as CreateNewHumanAvatar} from './CreateNewHumanAvatarContainer'
import {CreateNewRobotAvatarContainer as CreateNewRobotAvatar} from './CreateNewRobotAvatarContainer'
import {HistoryContainer as History} from './HistoryContainer'
import {IdSearchContainer as IdSearch} from './IdSearchContainer'
import {LobbyForAudienceContainer as LobbyForAudience} from './LobbyForAudienceContainer'
import {LobbyForHumanPlayerContainer as LobbyForHumanPlayer} from './LobbyForHumanPlayerContainer'
import {LobbyForRobotPlayerContainer as LobbyForRobotPlayer} from './LobbyForRobotPlayerContainer'
import {MainContainer as Main} from './MainContainer'
import {SelectHumanAvatarContainer as SelectHumanAvatar} from './SelectHumanAvatarContainer'
import {SelectRobotAvatarContainer as SelectRobotAvatar} from './SelectRobotAvatarContainer'
import {SettingsContainer as Settings} from './SettingsContainer'
import {WaitingForPlayersContainer as WaitingForPlayers} from './WaitingForPlayersContainer'

export const Routes: React.FC<{}> = () => (
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
Routes.displayName = 'Routes'
