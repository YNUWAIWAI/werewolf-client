import * as React from 'react'
import {Character} from '../../constants/Character'
import CommandSelection from './CommandSelection'
import Description from '../molecules/Description'
import {ImagePath} from '../../constants/ImagePath'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<CommandSelection />', () => {
  test('characters={[]}', () => {
    const handleSelectOptionEventHandler = jest.fn()
    const handleSelectOption = jest.fn(handleSelectOptionEventHandler)
    const wrapper = shallow(
      <CommandSelection
        characters={[]}
        descriptionId="CommandSelection.Description.noonVote.fixed"
        fixed={false}
        handleSelectOption={handleSelectOption}
        phase={village.Phase.noon}
      />
    )

    expect(wrapper.find(Description).exists()).toBe(true)
    expect(wrapper.find('.vi--command--selection--select').children()).toHaveLength(0)
  })
  test('15 characters fixed={false}', () => {
    const characters = [
      {
        id: '1',
        image: ImagePath.Character.a,
        initial: 'A',
        name: Character.a.en
      },
      {
        id: '2',
        image: ImagePath.Character.b,
        initial: 'B',
        name: Character.b.en
      },
      {
        id: '3',
        image: ImagePath.Character.c,
        initial: 'C',
        name: Character.c.en
      },
      {
        id: '4',
        image: ImagePath.Character.d,
        initial: 'D',
        name: Character.d.en
      },
      {
        id: '5',
        image: ImagePath.Character.e,
        initial: 'E',
        name: Character.e.en
      },
      {
        id: '6',
        image: ImagePath.Character.f,
        initial: 'F',
        name: Character.f.en
      },
      {
        id: '7',
        image: ImagePath.Character.g,
        initial: 'G',
        name: Character.g.en
      },
      {
        id: '8',
        image: ImagePath.Character.h,
        initial: 'H',
        name: Character.h.en
      },
      {
        id: '9',
        image: ImagePath.Character.i,
        initial: 'I',
        name: Character.i.en
      },
      {
        id: '10',
        image: ImagePath.Character.j,
        initial: 'J',
        name: Character.j.en
      },
      {
        id: '11',
        image: ImagePath.Character.k,
        initial: 'K',
        name: Character.k.en
      },
      {
        id: '12',
        image: ImagePath.Character.l,
        initial: 'L',
        name: Character.l.en
      },
      {
        id: '13',
        image: ImagePath.Character.m,
        initial: 'M',
        name: Character.m.en
      },
      {
        id: '14',
        image: ImagePath.Character.n,
        initial: 'N',
        name: Character.n.en
      },
      {
        id: '15',
        image: ImagePath.Character.o,
        initial: 'O',
        name: Character.o.en
      }
    ]
    const handleSelectOptionEventHandler = jest.fn()
    const handleSelectOption = jest.fn().mockReturnValueOnce(handleSelectOptionEventHandler)
    const wrapper = shallow(
      <CommandSelection
        characters={characters}
        descriptionId="CommandSelection.Description.noonVote.fixed"
        fixed={false}
        handleSelectOption={handleSelectOption}
        phase={village.Phase.noon}
      />
    )

    expect(wrapper.find(Description).exists()).toBe(true)
    expect(wrapper.find('.vi--command--selection--select').children()).toHaveLength(15)
  })
  test('1 characters fixed', () => {
    const characters = [
      {
        id: '1',
        image: ImagePath.Character.a,
        initial: 'A',
        name: Character.a.en
      }
    ]
    const handleSelectOptionEventHandler = jest.fn()
    const handleSelectOption = jest.fn().mockReturnValueOnce(handleSelectOptionEventHandler)
    const wrapper = shallow(
      <CommandSelection
        characters={characters}
        descriptionId="CommandSelection.Description.noonVote.fixed"
        fixed
        handleSelectOption={handleSelectOption}
        phase={village.Phase.noon}
      />
    )

    expect(wrapper.find(Description).exists()).toBe(true)
    expect(wrapper.find('.vi--command--selection--select').children()).toHaveLength(1)
  })
})
