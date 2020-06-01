import * as React from 'react'
import {Character} from '../constants/Character'
import {SuggestedData} from '../reducers/suggest'
import {shallow} from 'enzyme'
import {useFuse} from './fuse'

const suggestedData = [
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
  }
]

interface Props {
  suggestedData: SuggestedData[]
}
const Test: React.FC<Props> = props => {
  const {suggestedResult, updateSearchText} = useFuse(props.suggestedData)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchText(event.target.value)
  }

  return (
    <div>
      <ul>
        {
          suggestedResult.map(item => (
            <li
              key={item.id}
            >
              {item.name.en}
            </li>
          ))
        }
      </ul>
      <input
        onChange={handleChange}
      />
    </div>
  )
}

Test.displayName = 'Test'

test('render', () => {
  const wrapper = shallow(
    <Test
      suggestedData={suggestedData}
    />
  )

  expect(wrapper.find('li')).toHaveLength(suggestedData.length)
  expect(wrapper.html()).toMatchSnapshot()
})
test('input text', () => {
  const wrapper = shallow(
    <Test
      suggestedData={suggestedData}
    />
  )

  wrapper.find('input').simulate('change', {
    target: {
      value: Character.a.en
    }
  })

  expect(wrapper.find('li')).toHaveLength(1)
  expect(wrapper.html()).toMatchSnapshot()
})
test('reset text', () => {
  const wrapper = shallow(
    <Test
      suggestedData={suggestedData}
    />
  )

  wrapper.find('input').simulate('change', {
    target: {
      value: Character.a.en
    }
  })
  expect(wrapper.find('li')).toHaveLength(1)
  wrapper.find('input').simulate('change', {
    target: {
      value: ''
    }
  })
  expect(wrapper.find('li')).toHaveLength(suggestedData.length)
  expect(wrapper.html()).toMatchSnapshot()
})
