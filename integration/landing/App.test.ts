describe('App', () => {
  test('default', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=landing-app--default', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle('document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.2,
      failureThresholdType: 'percent'
    })
  })
  test('loginError', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=landing-app--loginerror', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle('document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.23,
      failureThresholdType: 'percent'
    })
  })
  test('signupError', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=landing-app--signuperror', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle('document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.2,
      failureThresholdType: 'percent'
    })
  })
})
