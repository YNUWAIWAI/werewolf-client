// @flow
const Cast = {
  '4': {
    A: {
      hunter: 0,
      madman: 0,
      mason: 0,
      medium: 0,
      seer: 0,
      villager: 3,
      werehumster: 0,
      werewolf: 1
    },
    B: {
      hunter: 0,
      madman: 0,
      mason: 0,
      medium: 0,
      seer: 1,
      villager: 2,
      werehumster: 0,
      werewolf: 1
    },
    C: {
      hunter: 0,
      madman: 0,
      mason: 0,
      medium: 1,
      seer: 1,
      villager: 1,
      werehumster: 0,
      werewolf: 1
    }
  },
  '5': {
    A: {
      hunter: 0,
      madman: 0,
      mason: 0,
      medium: 0,
      seer: 1,
      villager: 3,
      werehumster: 0,
      werewolf: 1
    },
    B: {
      hunter: 0,
      madman: 0,
      mason: 0,
      medium: 0,
      seer: 1,
      villager: 2,
      werehumster: 1,
      werewolf: 1
    },
    C: {
      hunter: 1,
      madman: 1,
      mason: 0,
      medium: 0,
      seer: 1,
      villager: 1,
      werehumster: 0,
      werewolf: 1
    }
  },
  '6': {
    A: {
      hunter: 0,
      madman: 0,
      mason: 0,
      medium: 0,
      seer: 1,
      villager: 4,
      werehumster: 0,
      werewolf: 1
    },
    B: {
      hunter: 0,
      madman: 0,
      mason: 0,
      medium: 0,
      seer: 1,
      villager: 3,
      werehumster: 1,
      werewolf: 1
    },
    C: {
      hunter: 1,
      madman: 3,
      mason: 0,
      medium: 0,
      seer: 1,
      villager: 0,
      werehumster: 0,
      werewolf: 1
    }
  },
  '7': {
    A: {
      hunter: 0,
      madman: 0,
      mason: 0,
      medium: 0,
      seer: 1,
      villager: 5,
      werehumster: 0,
      werewolf: 1
    },
    B: {
      hunter: 0,
      madman: 0,
      mason: 0,
      medium: 0,
      seer: 1,
      villager: 4,
      werehumster: 1,
      werewolf: 1
    },
    C: {
      hunter: 1,
      madman: 1,
      mason: 0,
      medium: 1,
      seer: 1,
      villager: 2,
      werehumster: 0,
      werewolf: 1
    }
  },
  '8': {
    A: {
      hunter: 0,
      madman: 0,
      mason: 0,
      medium: 0,
      seer: 1,
      villager: 6,
      werehumster: 0,
      werewolf: 1
    },
    B: {
      hunter: 0,
      madman: 1,
      mason: 0,
      medium: 0,
      seer: 1,
      villager: 4,
      werehumster: 1,
      werewolf: 1
    },
    C: {
      hunter: 0,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 1,
      werehumster: 0,
      werewolf: 2
    }
  },
  '9': {
    A: {
      hunter: 0,
      madman: 0,
      mason: 0,
      medium: 1,
      seer: 1,
      villager: 5,
      werehumster: 0,
      werewolf: 2
    },
    B: {
      hunter: 1,
      madman: 0,
      mason: 0,
      medium: 1,
      seer: 1,
      villager: 3,
      werehumster: 1,
      werewolf: 2
    },
    C: {
      hunter: 1,
      madman: 1,
      mason: 0,
      medium: 1,
      seer: 1,
      villager: 3,
      werehumster: 1,
      werewolf: 1
    }
  },
  '10': {
    A: {
      hunter: 0,
      madman: 1,
      mason: 0,
      medium: 1,
      seer: 1,
      villager: 5,
      werehumster: 0,
      werewolf: 2
    },
    B: {
      hunter: 1,
      madman: 0,
      mason: 0,
      medium: 1,
      seer: 1,
      villager: 4,
      werehumster: 1,
      werewolf: 2
    },
    C: {
      hunter: 1,
      madman: 1,
      mason: 0,
      medium: 1,
      seer: 2,
      villager: 2,
      werehumster: 1,
      werewolf: 2
    }
  },
  '11': {
    A: {
      hunter: 1,
      madman: 1,
      mason: 0,
      medium: 1,
      seer: 1,
      villager: 5,
      werehumster: 0,
      werewolf: 2
    },
    B: {
      hunter: 1,
      madman: 1,
      mason: 0,
      medium: 1,
      seer: 1,
      villager: 4,
      werehumster: 1,
      werewolf: 2
    },
    C: {
      hunter: 1,
      madman: 1,
      mason: 0,
      medium: 1,
      seer: 2,
      villager: 3,
      werehumster: 1,
      werewolf: 2
    }
  },
  '12': {
    A: {
      hunter: 1,
      madman: 1,
      mason: 0,
      medium: 1,
      seer: 1,
      villager: 6,
      werehumster: 0,
      werewolf: 2
    },
    B: {
      hunter: 1,
      madman: 1,
      mason: 0,
      medium: 1,
      seer: 1,
      villager: 5,
      werehumster: 1,
      werewolf: 2
    },
    C: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 3,
      werehumster: 1,
      werewolf: 2
    }
  },
  '13': {
    A: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 5,
      werehumster: 0,
      werewolf: 2
    },
    B: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 4,
      werehumster: 1,
      werewolf: 2
    },
    C: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 2,
      villager: 3,
      werehumster: 1,
      werewolf: 2
    }
  },
  '14': {
    A: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 5,
      werehumster: 1,
      werewolf: 2
    },
    B: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 5,
      werehumster: 1,
      werewolf: 2
    },
    C: {
      hunter: 1,
      madman: 2,
      mason: 2,
      medium: 1,
      seer: 2,
      villager: 3,
      werehumster: 1,
      werewolf: 2
    }
  },
  '15': {
    A: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 6,
      werehumster: 1,
      werewolf: 2
    },
    B: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 6,
      werehumster: 1,
      werewolf: 2
    },
    C: {
      hunter: 1,
      madman: 2,
      mason: 2,
      medium: 1,
      seer: 2,
      villager: 3,
      werehumster: 1,
      werewolf: 3
    }
  }
}

export default Cast
