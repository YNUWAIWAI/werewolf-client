/* eslint no-unused-vars: 0 */
declare namespace lobby {
  const enum Avatar {
    fixed = 'fixed',
    random = 'random',
    unspecified = 'unspecified'
  }
  const enum Member {
    A = 'A',
    B = 'B',
    C = 'C'
  }
  const enum Lobby {
    human = 'human player',
    audience = 'onymous audience',
    robot = 'robot player'
  }
  const enum PingStatus {
    danger = 'danger',
    safe = 'safe',
    warning = 'warning'
  }
  const enum Language {
    fr = 'fr',
    en = 'en',
    it = 'it',
    ja = 'ja'
  }
  interface Village {
    avatar: Avatar;
    comment: string | null;
    hostPlayer: HostPlayer;
    id: number;
    idForSearching: number;
    name: string;
    playerSetting: PlayerSetting;
    roleSetting: RoleSetting;
  }
  interface HostPlayer {
    isAnonymous: boolean;
    name: string;
  }
  interface PlayerSetting {
    current: number;
    human: Human;
    number: number;
    robot: Robot;
  }
  interface Robot {
    current: number;
    min: number;
  }
  interface Human {
    current: number;
    max: number;
  }
  interface RoleSetting {
    hunter: number;
    madman: number;
    mason: number;
    medium: number;
    seer: number;
    villager: number;
    werehamster: number;
    werewolf: number;
  }
  interface WaitingPlayer {
    avatarImage: string;
    isAnonymous: boolean;
    isHost: boolean;
    isMe: boolean;
    name: string;
    token: string;
  }
  enum Target {
    ADVANCED_SEARCH = 'ADVANCED_SEARCH',
    BUILD_VILLAGE = 'BUILD_VILLAGE',
    ID_SEARCH = 'ID_SEARCH',
    LEAVE_WAITING_PAGE = 'LEAVE_WAITING_PAGE',
    PLAY_GAME = 'PLAY_GAME',
    REFRESH = 'REFRESH',
    SEARCH_FOR_A_VILLAGE_IN_SESSION = 'SEARCH_FOR_A_VILLAGE_IN_SESSION',
    SEARCH_FOR_AN_OLD_VILLAGE = 'SEARCH_FOR_AN_OLD_VILLAGE',
    SHOW_ADVANCED_SEARCH = 'SHOW_ADVANCED_SEARCH',
    SHOW_BUILD_VILLAGE = 'SHOW_BUILD_VILLAGE',
    SHOW_CREDITS = 'SHOW_CREDITS',
    SHOW_CONNECTING_TO_ROBOT_PLAYER = 'SHOW_CONNECTING_TO_ROBOT_PLAYER',
    SHOW_HISTORY = 'SHOW_HISTORY',
    SHOW_HOW_TO_PLAY = 'SHOW_HOW_TO_PLAY',
    SHOW_ID_SEARCH = 'SHOW_ID_SEARCH',
    SHOW_LOBBY_FOR_AUDIENCE = 'SHOW_LOBBY_FOR_AUDIENCE',
    SHOW_LOBBY_FOR_HUMAN_PLAYER = 'SHOW_LOBBY_FOR_HUMAN_PLAYER',
    SHOW_LOBBY_FOR_ROBOT_PLAYER = 'SHOW_LOBBY_FOR_ROBOT_PLAYER',
    SHOW_MAIN = 'SHOW_MAIN',
    SHOW_SETTINGS = 'SHOW_SETTINGS'
  }
  interface MenuItem {
    disabled?: boolean;
    id: string;
    isLoading?: boolean;
    types: Target[];
  }
  interface PingResult {
    ping: string;
    status: PingStatus;
    token: string;
  }
  interface Payload {
    type: string;
  }
  interface Payload$Avatar extends Payload {
    image: string;
    lang: Language;
    name: string;
  }
  interface Payload$GetSettings extends Payload {
    lang: Language;
    userEmail: string;
    userName: string;
  }
  interface Payload$Lobby extends Payload {
    error: string | null;
    lobby: Lobby;
    villages: Village[];
  }
  interface Payload$Ping extends Payload {
    id: string;
    results: PingResult[];
  }
  interface Payload$SearchResult extends Payload {
    error: string | null;
    villages: Village[];
  }
  interface Payload$WatingPage extends Payload {
    error: string | null;
    village: Village;
    players: WaitingPlayer[];
  }
}
