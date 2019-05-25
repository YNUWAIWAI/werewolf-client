describe('App', () => {
  test('default', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=landing-app--default')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('loginError', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=landing-app--loginerror')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
  test('signupError', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=landing-app--signuperror')
    await page.evaluateHandle('document.fonts.ready')
    await page.waitFor(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 18,
      failureThresholdType: 'pixel'
    })
  })
})
