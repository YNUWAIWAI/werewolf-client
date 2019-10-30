describe('App', () => {
  test('default', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--default', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 1307,
      failureThresholdType: 'pixel'
    })
  })
  test('prologue', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--prologue', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 4686,
      failureThresholdType: 'pixel'
    })
  })
  test('morning (without werewolf chat)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--morning-without-werewolf-chat', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 8514,
      failureThresholdType: 'pixel'
    })
  })
  test('morning (with werewolf chat)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--morning-with-werewolf-chat', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 11522,
      failureThresholdType: 'pixel'
    })
  })
  test('day', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--noon', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 15879,
      failureThresholdType: 'pixel'
    })
  })
  test('night(seer)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--night-seer', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 12283,
      failureThresholdType: 'pixel'
    })
  })
  test('night(villager)', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--night-villager', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 8374,
      failureThresholdType: 'pixel'
    })
  })
  test('grave', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--grave', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 8903,
      failureThresholdType: 'pixel'
    })
  })
  test('result', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=village-app--result', {
      waitUntil: 'networkidle2'
    })
    await page.evaluateHandle(() => {}, 'document.fonts.ready')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot({
      failureThreshold: 6450,
      failureThresholdType: 'pixel'
    })
  })
})
