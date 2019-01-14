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
  const enum RoleId {
    hunter = 'hunter',
    madman = 'madman',
    mason = 'mason',
    medium = 'medium',
    seer = 'seer',
    villager = 'villager',
    werehamster = 'werehamster',
    werewolf = 'werewolf'
  }
  type RoleSetting = {
    [key in RoleId]: number
  }

  type Cast = {
    [numberOfPlayers: string]: {
      [member in Member]: RoleSetting
    }
  }

  type Token = string

  interface WaitingPlayer {
    avatarImage: string;
    isAnonymous: boolean;
    isHost: boolean;
    isMe: boolean;
    name: string;
    token: string;
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
