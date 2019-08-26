/* global village */
import * as React from 'react'
import CommandSelection from './CommandSelection'
import Description from '../molecules/Description'
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
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        initial: 'A',
        name: 'Adil'
      },
      {
        id: '2',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        initial: 'B',
        name: 'Borya'
      },
      {
        id: '3',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        initial: 'C',
        name: 'Chacha'
      },
      {
        id: '4',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        initial: 'D',
        name: 'Devdatta'
      },
      {
        id: '5',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        initial: 'E',
        name: 'Ekrem'
      },
      {
        id: '6',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
        initial: 'F',
        name: 'Fernando'
      },
      {
        id: '7',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        initial: 'G',
        name: 'Gavriil'
      },
      {
        id: '8',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/h_50x50.png',
        initial: 'H',
        name: 'Henrik'
      },
      {
        id: '9',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/i_50x50.png',
        initial: 'I',
        name: 'Ileanna'
      },
      {
        id: '10',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/j_50x50.png',
        initial: 'J',
        name: 'Jasmin'
      },
      {
        id: '11',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/k_50x50.png',
        initial: 'K',
        name: 'Kaiji'
      },
      {
        id: '12',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/l_50x50.png',
        initial: 'L',
        name: 'Louise'
      },
      {
        id: '13',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/m_50x50.png',
        initial: 'M',
        name: 'Marthe'
      },
      {
        id: '14',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
        initial: 'N',
        name: 'Nanyamka'
      },
      {
        id: '15',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
        initial: 'O',
        name: 'Oliwia'
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
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        initial: 'A',
        name: 'Adil'
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
