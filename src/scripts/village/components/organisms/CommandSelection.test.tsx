import * as React from 'react'
import * as village from '../../types'
import {Agent} from '../../constants/Agent'
import CommandSelection from './CommandSelection'
import Description from '../molecules/Description'
import {ImagePath} from '../../constants/ImagePath'
import {shallow} from 'enzyme'

describe('<CommandSelection />', () => {
  test('agents={[]}', () => {
    const handleSelectOptionEventHandler = jest.fn()
    const handleSelectOption = jest.fn(handleSelectOptionEventHandler)
    const wrapper = shallow(
      <CommandSelection
        agents={[]}
        descriptionId="CommandSelection.Description.dayVote.fixed"
        fixed={false}
        handleSelectOption={handleSelectOption}
        phase={village.Phase.day}
      />
    )

    expect(wrapper.find(Description).exists()).toBe(true)
    expect(wrapper.find('.vi--command--selection--select').children()).toHaveLength(0)
  })
  test('15 agents fixed={false}', () => {
    const agents = [
      {
        id: '1',
        image: ImagePath.Agent.a,
        initial: 'A',
        name: Agent.a.en
      },
      {
        id: '2',
        image: ImagePath.Agent.b,
        initial: 'B',
        name: Agent.b.en
      },
      {
        id: '3',
        image: ImagePath.Agent.c,
        initial: 'C',
        name: Agent.c.en
      },
      {
        id: '4',
        image: ImagePath.Agent.d,
        initial: 'D',
        name: Agent.d.en
      },
      {
        id: '5',
        image: ImagePath.Agent.e,
        initial: 'E',
        name: Agent.e.en
      },
      {
        id: '6',
        image: ImagePath.Agent.f,
        initial: 'F',
        name: Agent.f.en
      },
      {
        id: '7',
        image: ImagePath.Agent.g,
        initial: 'G',
        name: Agent.g.en
      },
      {
        id: '8',
        image: ImagePath.Agent.h,
        initial: 'H',
        name: Agent.h.en
      },
      {
        id: '9',
        image: ImagePath.Agent.i,
        initial: 'I',
        name: Agent.i.en
      },
      {
        id: '10',
        image: ImagePath.Agent.j,
        initial: 'J',
        name: Agent.j.en
      },
      {
        id: '11',
        image: ImagePath.Agent.k,
        initial: 'K',
        name: Agent.k.en
      },
      {
        id: '12',
        image: ImagePath.Agent.l,
        initial: 'L',
        name: Agent.l.en
      },
      {
        id: '13',
        image: ImagePath.Agent.m,
        initial: 'M',
        name: Agent.m.en
      },
      {
        id: '14',
        image: ImagePath.Agent.n,
        initial: 'N',
        name: Agent.n.en
      },
      {
        id: '15',
        image: ImagePath.Agent.o,
        initial: 'O',
        name: Agent.o.en
      }
    ]
    const handleSelectOptionEventHandler = jest.fn()
    const handleSelectOption = jest.fn().mockReturnValueOnce(handleSelectOptionEventHandler)
    const wrapper = shallow(
      <CommandSelection
        agents={agents}
        descriptionId="CommandSelection.Description.dayVote.fixed"
        fixed={false}
        handleSelectOption={handleSelectOption}
        phase={village.Phase.day}
      />
    )

    expect(wrapper.find(Description).exists()).toBe(true)
    expect(wrapper.find('.vi--command--selection--select').children()).toHaveLength(15)
  })
  test('1 agents fixed', () => {
    const agents = [
      {
        id: '1',
        image: ImagePath.Agent.a,
        initial: 'A',
        name: Agent.a.en
      }
    ]
    const handleSelectOptionEventHandler = jest.fn()
    const handleSelectOption = jest.fn().mockReturnValueOnce(handleSelectOptionEventHandler)
    const wrapper = shallow(
      <CommandSelection
        agents={agents}
        descriptionId="CommandSelection.Description.dayVote.fixed"
        fixed
        handleSelectOption={handleSelectOption}
        phase={village.Phase.day}
      />
    )

    expect(wrapper.find(Description).exists()).toBe(true)
    expect(wrapper.find('.vi--command--selection--select').children()).toHaveLength(1)
  })
})
