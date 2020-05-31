import * as React from 'react'
import {AdvancedSearchContainer as AdvancedSearch} from './AdvancedSearchContainer'
import {BuildVillageContainer as BuildVillage} from './BuildVillageContainer'
import {HistoryContainer as History} from './HistoryContainer'
import {IdSearchContainer as IdSearch} from './IdSearchContainer'
import {IntlProviderContainer} from './IntlProviderContainer'
import {LobbyForAudienceContainer as LobbyForAudience} from './LobbyForAudienceContainer'
import {LobbyForHumanPlayerContainer as LobbyForHumanPlayer} from './LobbyForHumanPlayerContainer'
import {LobbyForRobotPlayerContainer as LobbyForRobotPlayer} from './LobbyForRobotPlayerContainer'
import {MainContainer as Main} from './MainContainer'
import {MemoryRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {Routes} from './Routes'
import {SettingsContainer as Settings} from './SettingsContainer'
import {WaitingForPlayersContainer as WaitingForPlayers} from './WaitingForPlayersContainer'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<Routes />', () => {
  test('/', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })

    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(Main).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/history', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/history']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(History).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/settings', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/settings']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(Settings).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/audience/lobby', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/audience/lobby']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(LobbyForAudience).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/human/lobby', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/human/lobby']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(LobbyForHumanPlayer).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/robot/lobby', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/robot/lobby']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(LobbyForRobotPlayer).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/audience/advancedSearch', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/audience/advancedSearch']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(AdvancedSearch).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/human/advancedSearch', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/human/advancedSearch']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(AdvancedSearch).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/robot/advancedSearch', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/robot/advancedSearch']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(AdvancedSearch).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/audience/buildVillage', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/audience/buildVillage']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(BuildVillage).exists()).toBe(false)
    expect(wrapper.find(Main).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/human/buildVillage', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/human/buildVillage']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(BuildVillage).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/robot/buildVillage', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/robot/buildVillage']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(BuildVillage).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/audience/idSearch', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/human/idSearch']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(IdSearch).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/human/idSearch', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/human/idSearch']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(IdSearch).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/robot/idSearch', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/robot/idSearch']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(IdSearch).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/audience/waitingForPlayers', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/human/waitingForPlayers']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(WaitingForPlayers).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/human/waitingForPlayers', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/human/waitingForPlayers']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(WaitingForPlayers).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('/robot/waitingForPlayers', () => {
    const store = fakeStore({
      obfucator: {
        loading: false,
        visible: false
      }
    })
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <MemoryRouter initialEntries={['/robot/waitingForPlayers']}>
            <Routes />
          </MemoryRouter>
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(WaitingForPlayers).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
