import * as lobby from 'types/lobby'
const json: lobby.Payload$searchResult = {
  error: null,
  type: lobby.PayloadType.searchResult,
  villages: [
    {
      avatar: lobby.Avatar.fixed,
      comment: null,
      hostPlayer: {
        isAnonymous: false,
        isHuman: true,
        name: 'Alice'
      },
      id: 1,
      idForSearching: 123,
      name: 'Alice\'s village',
      playerSetting: {
        current: 8,
        human: {
          current: 5,
          max: 8
        },
        number: 15,
        robot: {
          current: 3,
          min: 7
        }
      },
      roleSetting: {
        hunter: 1,
        madman: 1,
        mason: 2,
        medium: 1,
        seer: 1,
        villager: 6,
        werehamster: 1,
        werewolf: 2
      }
    }
  ]
}

export default json
