/* global village */
import {firstMorning, flavorText, myMessageOnChat} from './fakeServer'
import reducer, {initialState} from './suggest'
import {Agent} from '../constants/Agent'
import {Role} from '../constants/Role'
import {socket} from '../actions'

describe('socket/MESSAGE', () => {
  test('firstMorning', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning)
      )
    ).toEqual(
      {
        data: [
          {
            id: Agent.a.en,
            name: Agent.a
          },
          {
            id: Agent.b.en,
            name: Agent.b
          },
          {
            id: Agent.c.en,
            name: Agent.c
          },
          {
            id: Agent.d.en,
            name: Agent.d
          },
          {
            id: Agent.e.en,
            name: Agent.e
          },
          {
            id: Agent.f.en,
            name: Agent.f
          },
          {
            id: Agent.g.en,
            name: Agent.g
          },
          {
            id: Agent.h.en,
            name: Agent.h
          },
          {
            id: Agent.i.en,
            name: Agent.i
          },
          {
            id: Agent.j.en,
            name: Agent.j
          },
          {
            id: Agent.k.en,
            name: Agent.k
          },
          {
            id: Agent.l.en,
            name: Agent.l
          },
          {
            id: Agent.m.en,
            name: Agent.m
          },
          {
            id: Agent.n.en,
            name: Agent.n
          },
          {
            id: Agent.o.en,
            name: Agent.o
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
            id: village.RoleId.master,
            name: Role.master
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
        socket.message(flavorText)
      )
    ).toEqual(
      initialState
    )
  })
  test('myMessageOnChat', () => {
    expect(
      reducer(
        initialState,
        socket.message(myMessageOnChat)
      )
    ).toEqual(
      initialState
    )
  })
})
