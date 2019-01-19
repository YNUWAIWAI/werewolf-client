/* eslint no-unused-vars: 0, init-declarations: 0 */
declare namespace village {
  const enum Directionality {
    serverToClient = 'server to client',
    clientToServer = 'client to server'
  }
  const enum Channel {
    anonymousAudience = 'anonymousAudience',
    grave = 'grave',
    hunter = 'hunter',
    master = 'master',
    onymousAudience = 'onymousAudience',
    private = 'private',
    public = 'public',
    seer = 'seer',
    werewolf = 'werewolf'
  }
  const enum ChatChannel {
    grave = 'grave',
    limited = 'limited',
    master = 'master',
    private = 'private',
    public = 'public'
  }
  const enum InputChannel {
    grave = 'grave',
    limited = 'limited',
    postMortem = 'post mortem',
    private = 'private',
    public = 'public'
  }
  const enum Phase {
    morning = 'morning',
    day = 'day',
    night = 'night',
    postMortem = 'post mortem',
    result = 'result',
    flavorText = 'flavor text'
  }
  const enum RoleId {
    villager = 'villager',
    seer = 'seer',
    medium = 'medium',
    hunter = 'hunter',
    mason = 'mason',
    madman = 'madman',
    werewolf = 'werewolf',
    werehamster = 'werehamster',
    master = 'master'
  }
  const enum BoardState {
    QUESTION = '?',
    TRIANGLE = 'Δ',
    CIRCLE = 'O',
    CROSS = 'X',
    FILL = 'fill'
  }
  const enum Language {
    en = 'en',
    fr = 'fr',
    it = 'it',
    ja = 'ja'
  }
  type LanguageMap = {
    [Language.en]: string,
    [Language.fr]?: string,
    [Language.it]?: string,
    [Language.ja]?: string
  }

  const enum Result {
    win = 'win',
    lose = 'lose'
  }
  type AgentId = string

  type Token = string

  const enum AgentStatus {
    alive = 'alive',
    dead = 'dead',
    deathByExecution = 'death by execution',
    deathByAttack = 'death by attack',
    deathByFear = 'death by fear',
    unnaturalDeath = 'unnatural death'
  }
  const enum Team {
    villager = 'villager',
    werehamster = 'werehamster',
    werewolf = 'werewolf'
  }
  const enum Gender {
    female = 'female',
    male = 'male'
  }
  const enum Polarity {
    negative = 'negative',
    positive = 'positive'
  }
  const enum Context {
    Agent = 'https://werewolf.world/context/0.2/agent.jsonld',
    Avatar = 'https://werewolf.world/context/0.2/avatar.jsonld',
    Base = 'https://werewolf.world/context/0.2/base.jsonld',
    Board = 'https://werewolf.world/context/0.2/board.jsonld',
    BoardResult = 'https://werewolf.world/context/0.2/boardResult.jsonld',
    Chat = 'https://werewolf.world/context/0.2/chat.jsonld',
    Error = 'https://werewolf.world/context/0.2/error.jsonld',
    FlavorText = 'https://werewolf.world/context/0.2/flavorText.jsonld',
    Role = 'https://werewolf.world/context/0.2/role.jsonld',
    Scroll = 'https://werewolf.world/context/0.2/scroll.jsonld',
    Village = 'https://werewolf.world/context/0.2/village.jsonld',
    Vote = 'https://werewolf.world/context/0.2/vote.jsonld',
    VotingResult = 'https://werewolf.world/context/0.2/votingResult.jsonld'
  }
  const enum BaseContext {
    Agent = 'https://werewolf.world/context/0.2/agent.jsonld',
    Avatar = 'https://werewolf.world/context/0.2/avatar.jsonld',
    Base = 'https://werewolf.world/context/0.2/base.jsonld',
    Chat = 'https://werewolf.world/context/0.2/chat.jsonld',
    Error = 'https://werewolf.world/context/0.2/error.jsonld',
    FlavorText = 'https://werewolf.world/context/0.2/flavorText.jsonld',
    Role = 'https://werewolf.world/context/0.2/role.jsonld',
    Scroll = 'https://werewolf.world/context/0.2/scroll.jsonld',
    Vote = 'https://werewolf.world/context/0.2/vote.jsonld',
    VotingResult = 'https://werewolf.world/context/0.2/votingResult.jsonld'
  }
  const enum Message {
    boardMessage = 'boardMessage',
    errorMessage = 'errorMessage',
    flavorTextMessage = 'flavorTextMessage',
    playerMessage = 'playerMessage',
    scrollMessage = 'scrollMessage',
    systemMessage = 'systemMessage',
    voteMessage = 'voteMessage',
  }
  /*
    'https://werewolf.world/context/0.2/agent.jsonld'
      dependency:
        'https://werewolf.world/context/0.2/base.jsonld'
        'boardMessage'
        'playerMessage'
        'systemMessage'
        'voteMessage'
        'https://werewolf.world/context/0.2/votingResult.jsonld'
  */
  interface Agent {
    '@context': Context.Agent;
    '@id': string;
    isMine?: boolean;
    name: LanguageMap;
    'full name'?: LanguageMap;
    gender?: Gender;
    image: string;
    id: number;
    status?: string; // AgentStatus
    update?: {
      '@id': Time['@id'];
      date: Time['date'];
      phase: Time['phase'];
    };
    isAChoice?: boolean;
    result?: Result;
  }

  /*
  'https://werewolf.world/context/0.2/avatar.jsonld'
    dependency:
      'https://werewolf.world/context/0.2/base.jsonld'
      'systemMessage'
  */
  interface Avatar {
    '@context'?: Context.Avatar;
    '@id'?: string;
    token?: string;
    name?: string;
    image?: string;
  }

  /*
    'https://werewolf.world/context/0.2/base.jsonld'
      dependency:
        'boardMessage'
        'errorMessage'
        'flavorTextMessage'
        'playerMessage'
        'scrollMessage'
        'systemMessage'
        'voteMessage'
  */
  interface Base extends PayloadBase {
    '@id': string;
    '@context': BaseContext[];
    village: {
      '@context': Context.Village;
      '@id': string;
      id: number;
      lang: Language;
      name: string;
      totalNumberOfAgents: number;
    };
    token: Avatar['token'];
    phase: Time['phase'];
    date: Time['date'];
    phaseTimeLimit: number;
    phaseStartTime: string;
    serverTimestamp: string;
    clientTimestamp: string;
    directionality: Directionality;
    intensionalDisclosureRange: Channel;
    extensionalDisclosureRange: {
      '@id': Agent['@id'];
      id: Agent['id'];
      image: Agent['image'];
      name: Agent['name'];
      role: {
        '@id': Role['@id'];
        image: Role['image'];
        name: Role['name'];
      };
      status: Agent['status'];
    }[];
    avatar?: {
      '@context': Avatar['@context'];
      '@id': Avatar['@id'];
      token: Avatar['token'];
      name: Avatar['name'];
      image: Avatar['image'];
    };
    myAgent?: {
      '@context': Agent['@context'];
      '@id': Agent['@id'];
      id: Agent['id'];
      image: Agent['image'];
      name: Agent['name'];
      role: {
        '@context': Role['@context'];
        '@id': Role['@id'];
        image: Role['image'];
        name: Role['name'];
      };
    };
  }

  /*
  'https://werewolf.world/context/0.2/board.jsonld'
    dependency:
      'boardMessage'
      'systemMessage'
  */
  interface Board {
    '@context'?: Context.BoardResult;
    '@id'?: string;
    polarity?: Polarity; // 'positive' | 'negative'
    prediction?: BoardState; // BoardState
  }

  /*
  'https://werewolf.world/context/0.2/chat.jsonld'
    dependency;
      'playerMessage'
  */
  interface Chat {
    isMine: boolean;
    id?: number;
    counter?: number;
    limit?: number;
    interval?: string;
    text: {
      '@value': string;
      '@language': Language;
    };
    characterLimit: number;
    isOver: boolean;
  }

  /*
  'https://werewolf.world/context/0.2/error.jsonld'
    dependency:
      'errorMessage'
  */
  interface Error {
    content: {
      en: string;
      ja?: string;
    };
    severity: 'error' | 'warning';
    source: string;
  }

  /*
  'https://werewolf.world/context/0.2/role.jsonld'
    dependency:
      'https://werewolf.world/context/0.2/base.jsonld'
      'boardMessage'
      'systemMessage'
  */
  interface Role {
    '@context': Context.Role;
    '@id': string;
    name: LanguageMap;
    image: string;
    isMine?: boolean;
    numberOfAgents?: number;
  }

  /*
  'https://werewolf.world/context/0.2/scroll.jsonld'
    dependency:
      scrollMessage
  */
  interface Scroll {
    nodeId: string;
    scrollTop: number;
    scrollHeight: number;
    offsetHeight: number;
  }

  /*
  'https://werewolf.world/context/0.2/time.jsonld'
    dependency:
      'https://werewolf.world/context/0.2/agent.jsonld'
      'https://werewolf.world/context/0.2/base.jsonld'
      'systemMessage'
  */
  interface Time {
    '@id': string;
    phase: Phase;
    date: number;
  }

  /*
  'https://werewolf.world/context/0.2/votingResult.jsonld'
    dependency:
      'systemMessage'
  */
  interface VotingResult {
    votingResultsSummary?: {
      '@id': string;
      agentToLynch: {
        '@id': Agent['@id'];
        id: Agent['id'];
        image: Agent['image'];
        name: Agent['name'];
      };
      numberOfVotes: number;
      rankOfVotes: number;
    }[];
    votingResultsDetails?: {
      '@id': string;
      sourceAgent: {
        '@id': Agent['@id'];
        id: Agent['id'];
        image: Agent['image'];
        name: Agent['name'];
      };
      targetAgent: {
        '@id': Agent['@id'];
        id: Agent['id'];
        image: Agent['image'];
        name: Agent['name'];
      };
    }[];
  }
  interface PayloadBase {
    '@id'?: string
    '@payload'?: Message
  }
  interface Payload$boardMessage extends Base {
    '@payload'?: Message.boardMessage,
    agent: {
      '@context': Agent['@context'];
      '@id': Agent['@id'];
      id: Agent['id'];
      name: Agent['name'];
      image: Agent['image'];
    };
    role: {
      '@context': Role['@context'];
      '@id': Role['@id'];
      name: Role['name'];
      image: Role['image'];
    };
    prediction: Board['prediction'];
  }
    interface Payload$errorMessage extends Base, Error {
      '@payload'?: Message.errorMessage
    }
    interface Payload$flavorTextMessage extends Base {
      '@payload'?: Message.flavorTextMessage,
      flavorText: Payload$playerMessage[];
    }
    interface Payload$playerMessage extends Base {
      '@payload'?: Message.playerMessage,
      agent?: {
        '@context': Agent['@context'];
        '@id': Agent['@id'];
        id: Agent['id'];
        name: Agent['name'];
        image: Agent['image'];
      };
      isMine: Chat['isMine'];
      id?: Chat['id'];
      counter?: Chat['counter'];
      limit?: Chat['limit'];
      interval?: Chat['interval'];
      text: Chat['text'];
      characterLimit: Chat['characterLimit'];
      isOver: Chat['isOver'];
    }
    interface Payload$scrollMessage extends Base, Scroll {
      '@payload'?: Message.scrollMessage
    }
    interface Payload$systemMessage extends Base {
      '@payload'?: Message.systemMessage,
      votingResultsSummary?: VotingResult['votingResultsSummary'];
      votingResultsDetails?: VotingResult['votingResultsDetails'];
      agent?: {
        '@context': Agent['@context'];
        '@id': Agent['@id'];
        isMine: Agent['isMine'];
        name: Agent['name'];
        image: Agent['image'];
        id: Agent['id'];
        status: Agent['status'];
        update?: Agent['update'];
        isAChoice?: Agent['isAChoice'];
        result?: Agent['result'];
        avatar?: {
          '@context': Avatar['@context'];
          '@id': Avatar['@id'];
          token: Avatar['token'];
          name: Avatar['name'];
          image: Avatar['image'];
        };
        role?: {
          '@context': Role['@context'];
          '@id': Role['@id'];
          name: Role['name'];
          image: Role['image'];
        };
      }[];
      role?: {
        '@context': Role['@context'];
        '@id': Role['@id'];
        isMine: Role['isMine'];
        name: Role['name'];
        image: Role['image'];
        numberOfAgents: Role['numberOfAgents'];
        agent?: {
          '@context': Agent['@context'];
          '@id': Agent['@id'];
          id: Agent['id'];
          name: Agent['name'];
          image: Agent['image'];
        }[];
        board?: {
          '@context': Board['@context'];
          '@id': string;
          agent: {
            '@context': Agent['@context'];
            '@id': Agent['@id'];
            id: Agent['id'];
            name: Agent['name'];
            image: Agent['image'];
          };
          polarity: Board['polarity'];
          phase: Time['phase'];
          date: Time['date'];
        }[];
      }[];
    }
    interface Payload$voteMessage extends Base {
      '@payload'?: Message.voteMessage,
      agent?: {
        '@context': Agent['@context'];
        '@id': Agent['@id'];
        name: Agent['name'];
        image: Agent['image'];
        id: Agent['id'];
      };
    }
    interface Payload$ready extends PayloadBase {
      token: string,
      type: 'ready',
      villageId: number
    }
    type Payload =
      | Payload$boardMessage
      | Payload$errorMessage
      | Payload$flavorTextMessage
      | Payload$playerMessage
      | Payload$ready
      | Payload$scrollMessage
      | Payload$systemMessage
      | Payload$voteMessage
}
