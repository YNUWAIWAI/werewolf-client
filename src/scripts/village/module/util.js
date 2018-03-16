// @flow
const trimBaseUri = (id: string): string => (/\/(\w+)$/).exec(id)[1]
const xor = (a: boolean, b: boolean): boolean => a !== b

export {trimBaseUri, xor}
