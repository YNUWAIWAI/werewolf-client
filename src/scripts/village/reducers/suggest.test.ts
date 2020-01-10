import {
  firstMorning,
  flavorText,
  myMessageOnChat
} from './fakeServer'
import reducer, {initialState} from './suggest'
import {Character} from '../constants/Character'
import {Role} from '../constants/Role'
import {message} from '../actions'
import {village} from '../types'

describe('message/SYSTEM_MESSAGE', () => {
  test('firstMorning', () => {
    expect(
      reducer(
        initialState,
        message.systemMessage(firstMorning)
      )
    ).toStrictEqual(
      {
        data: [
          {
            id: Character.a.en,
            name: Character.a
          },
          {
            id: Character.b.en,
            name: Character.b
          },
          {
            id: Character.c.en,
            name: Character.c
          },
          {
            id: Character.d.en,
            name: Character.d
          },
          {
            id: Character.e.en,
            name: Character.e
          },
          {
            id: Character.f.en,
            name: Character.f
          },
          {
            id: Character.g.en,
            name: Character.g
          },
          {
            id: Character.h.en,
            name: Character.h
          },
          {
            id: Character.i.en,
            name: Character.i
          },
          {
            id: Character.j.en,
            name: Character.j
          },
          {
            id: Character.k.en,
            name: Character.k
          },
          {
            id: Character.l.en,
            name: Character.l
          },
          {
            id: Character.m.en,
            name: Character.m
          },
          {
            id: Character.n.en,
            name: Character.n
          },
          {
            id: Character.o.en,
            name: Character.o
          },
          {
            id: village.RoleId.hunter,
            name: Role.hunter
          },
          {
            id: village.RoleId.madman,
            name: Role.madman
          },
          {
            id: village.RoleId.mason,
            name: Role.mason
          },
          {
            id: village.RoleId.medium,
            name: Role.medium
          },
          {
            id: village.RoleId.seer,
            name: Role.seer
          },
          {
            id: village.RoleId.villager,
            name: Role.villager
          },
          {
            id: village.RoleId.werehamster,
            name: Role.werehamster
          },
          {
            id: village.RoleId.werewolf,
            name: Role.werewolf
          }
        ]
      }
    )
  })
  test('flavorText', () => {
    expect(
      reducer(
        initialState,
        message.systemMessage(flavorText)
      )
    ).toStrictEqual(
      initialState
    )
  })
  test('myMessageOnChat', () => {
    expect(
      reducer(
        initialState,
        message.systemMessage(myMessageOnChat)
      )
    ).toStrictEqual(
      initialState
    )
  })
})
