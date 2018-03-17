// @flow
const trimBaseUri = <T>(id: string): T => (/\/(\w+)$/).exec(id)[1]
const xor = (a: boolean, b: boolean): boolean => a !== b

export {trimBaseUri, xor}
