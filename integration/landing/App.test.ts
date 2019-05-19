import {sleep} from '../util'

describe('App', () => {
  test('default', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=landing-app--default')
    await sleep(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('loginError', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=landing-app--loginerror')
    await sleep(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('signupError', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=landing-app--signuperror')
    await sleep(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
})
